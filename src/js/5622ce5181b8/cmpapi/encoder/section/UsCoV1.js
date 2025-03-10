import { AbstractLazilyEncodableSection } from "./AbstractLazilyEncodableSection.js";
import { UsCoV1Field } from "../field/UsCoV1Field.js";
import { UsCoV1CoreSegment } from "../segment/UsCoV1CoreSegment.js";
import { UsCoV1GpcSegment } from "../segment/UsCoV1GpcSegment.js";
export class UsCoV1 extends AbstractLazilyEncodableSection {
    static ID = 10;
    static VERSION = 1;
    static NAME = "uscov1";
    constructor(encodedString) {
        super();
        if (encodedString && encodedString.length > 0) {
            this.decode(encodedString);
        }
    }
    //Overriden
    getId() {
        return UsCoV1.ID;
    }
    //Overriden
    getName() {
        return UsCoV1.NAME;
    }
    //Override
    getVersion() {
        return UsCoV1.VERSION;
    }
    //Overriden
    initializeSegments() {
        let segments = [];
        segments.push(new UsCoV1CoreSegment());
        segments.push(new UsCoV1GpcSegment());
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
                segments[1].setFieldValue(UsCoV1Field.GPC_SEGMENT_INCLUDED, true);
                segments[1].decode(encodedSegments[1]);
            }
            else {
                segments[1].setFieldValue(UsCoV1Field.GPC_SEGMENT_INCLUDED, false);
            }
        }
        return segments;
    }
    // Overriden
    encodeSection(segments) {
        let encodedSegments = [];
        if (segments.length >= 1) {
            encodedSegments.push(segments[0].encode());
            if (segments.length >= 2 && segments[1].getFieldValue(UsCoV1Field.GPC_SEGMENT_INCLUDED) === true) {
                encodedSegments.push(segments[1].encode());
            }
        }
        return encodedSegments.join(".");
    }
}
