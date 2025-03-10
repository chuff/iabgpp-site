import { UsCtV1Field } from "../field/UsCtV1Field.js";
import { UsCtV1CoreSegment } from "../segment/UsCtV1CoreSegment.js";
import { UsCtV1GpcSegment } from "../segment/UsCtV1GpcSegment.js";
import { AbstractLazilyEncodableSection } from "./AbstractLazilyEncodableSection.js";
export class UsCtV1 extends AbstractLazilyEncodableSection {
    static ID = 12;
    static VERSION = 1;
    static NAME = "usctv1";
    constructor(encodedString) {
        super();
        if (encodedString && encodedString.length > 0) {
            this.decode(encodedString);
        }
    }
    //Overriden
    getId() {
        return UsCtV1.ID;
    }
    //Overriden
    getName() {
        return UsCtV1.NAME;
    }
    //Override
    getVersion() {
        return UsCtV1.VERSION;
    }
    //Overriden
    initializeSegments() {
        let segments = [];
        segments.push(new UsCtV1CoreSegment());
        segments.push(new UsCtV1GpcSegment());
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
                segments[1].setFieldValue(UsCtV1Field.GPC_SEGMENT_INCLUDED, true);
                segments[1].decode(encodedSegments[1]);
            }
            else {
                segments[1].setFieldValue(UsCtV1Field.GPC_SEGMENT_INCLUDED, false);
            }
        }
        return segments;
    }
    // Overriden
    encodeSection(segments) {
        let encodedSegments = [];
        if (segments.length >= 1) {
            encodedSegments.push(segments[0].encode());
            if (segments.length >= 2 && segments[1].getFieldValue(UsCtV1Field.GPC_SEGMENT_INCLUDED) === true) {
                encodedSegments.push(segments[1].encode());
            }
        }
        return encodedSegments.join(".");
    }
}
