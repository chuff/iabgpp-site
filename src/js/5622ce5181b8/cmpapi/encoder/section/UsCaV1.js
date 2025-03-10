import { UsCaV1Field } from "../field/UsCaV1Field.js";
import { UsCaV1CoreSegment } from "../segment/UsCaV1CoreSegment.js";
import { UsCaV1GpcSegment } from "../segment/UsCaV1GpcSegment.js";
import { AbstractLazilyEncodableSection } from "./AbstractLazilyEncodableSection.js";
export class UsCaV1 extends AbstractLazilyEncodableSection {
    static ID = 8;
    static VERSION = 1;
    static NAME = "uscav1";
    constructor(encodedString) {
        super();
        if (encodedString && encodedString.length > 0) {
            this.decode(encodedString);
        }
    }
    //Overriden
    getId() {
        return UsCaV1.ID;
    }
    //Overriden
    getName() {
        return UsCaV1.NAME;
    }
    //Override
    getVersion() {
        return UsCaV1.VERSION;
    }
    //Overriden
    initializeSegments() {
        let segments = [];
        segments.push(new UsCaV1CoreSegment());
        segments.push(new UsCaV1GpcSegment());
        return segments;
    }
    //Overriden
    decodeSection(encodedString) {
        let segments = this.initializeSegments();
        if (encodedString != null && encodedString.length !== 0) {
            let encodedSegments = encodedString.split(".");
            if (encodedSegments.length > 0) {
                segments[0].decode(encodedSegments[0]);
            }
            if (encodedSegments.length > 1) {
                segments[1].setFieldValue(UsCaV1Field.GPC_SEGMENT_INCLUDED, true);
                segments[1].decode(encodedSegments[1]);
            }
            else {
                segments[1].setFieldValue(UsCaV1Field.GPC_SEGMENT_INCLUDED, false);
            }
        }
        return segments;
    }
    // Overriden
    encodeSection(segments) {
        let encodedSegments = [];
        if (segments.length >= 1) {
            encodedSegments.push(segments[0].encode());
            if (segments.length >= 2 && segments[1].getFieldValue(UsCaV1Field.GPC_SEGMENT_INCLUDED) === true) {
                encodedSegments.push(segments[1].encode());
            }
        }
        return encodedSegments.join(".");
    }
}
