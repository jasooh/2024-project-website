// convert json into format for draft js
import { convertFromRaw } from "draft-js";

export default function useText(jsonData) {
    const blocks = jsonData.map((section) => {
        const text = section.children.map((child) => child.text).join('');
        const inlineStyleRanges = [];
        const entityRanges = [];

        let offset = 0;
        let entityCounter = 0;
        section.children.forEach((child) => {
            if (child.bold) {
                inlineStyleRanges.push({
                    offset,
                    length: child.text.length,
                    style: 'BOLD'
                });
            }
            offset += child.text.length;
        });

        return {
            text,
            type: 'unstyled',
            inlineStyleRanges,
        };
    });
    const entityMap = {};
    const formatted = convertFromRaw({ blocks, entityMap })

    return formatted;
}