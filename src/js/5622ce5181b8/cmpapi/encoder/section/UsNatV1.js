import { AbstractLazilyEncodableSection } from "./AbstractLazilyEncodableSection.js";
import { UsNatV1Field } from "../field/UsNatV1Field.js";
import { UsNatV1CoreSegment } from "../segment/UsNatV1CoreSegment.js";
import { UsNatV1GpcSegment } from "../segment/UsNatV1GpcSegment.js";
export class UsNatV1 extends AbstractLazilyEncodableSection {
    static ID = 7;
    static VERSION = 1;
    static NAME = "usnatv1";
    constructor(encodedString) {
        super();
        if (encodedString && encodedString.length > 0) {
            this.decode(encodedString);
        }
    }
    //Overriden
    getId() {
        return UsNatV1.ID;
    }
    //Overriden
    getName() {
        return UsNatV1.NAME;
    }
    //Override
    getVersion() {
        return UsNatV1.VERSION;
    }
    //Overriden
    initializeSegments() {
        let segments = [];
        segments.push(new UsNatV1CoreSegment());
        segments.push(new UsNatV1GpcSegment());
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
                segments[1].setFieldValue(UsNatV1Field.GPC_SEGMENT_INCLUDED, true);
                segments[1].decode(encodedSegments[1]);
            }
            else {
                segments[1].setFieldValue(UsNatV1Field.GPC_SEGMENT_INCLUDED, false);
            }
        }
        return segments;
    }
    // Overriden
    encodeSection(segments) {
        let encodedSegments = [];
        if (segments.length >= 1) {
            encodedSegments.push(segments[0].encode());
            if (segments.length >= 2 && segments[1].getFieldValue(UsNatV1Field.GPC_SEGMENT_INCLUDED) === true) {
                encodedSegments.push(segments[1].encode());
            }
        }
        return encodedSegments.join(".");
    }
}
