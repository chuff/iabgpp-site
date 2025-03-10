import { EncodableSegment } from "../segment/EncodableSegment.js";
import { AbstractLazilyEncodableSection } from "./AbstractLazilyEncodableSection.js";
export declare class UsCtV1 extends AbstractLazilyEncodableSection {
    static readonly ID = 12;
    static readonly VERSION = 1;
    static readonly NAME = "usctv1";
    constructor(encodedString?: string);
    getId(): number;
    getName(): string;
    getVersion(): number;
    protected initializeSegments(): EncodableSegment[];
    protected decodeSection(encodedString: string): EncodableSegment[];
    protected encodeSection(segments: EncodableSegment[]): string;
}
