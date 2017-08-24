// This is the RawDraftContentState representation of Draft JS content state.
// It is obtained by calling convertToRaw(editorState.getCurrentContent()).
// See: https://draftjs.org/docs/api-reference-data-conversion.html
export default {
    "entityMap": {
        "0": {
            "type": "LINK",
            "mutability": "MUTABLE",
            "data": {
                "url": "https://vizor.io/"
            }
        },
        "1": {
            "type": "LINK",
            "mutability": "MUTABLE",
            "data": {
                "url": "https://beta.vizor.io/"
            }
        },
        "2": {
            "type": "SEPARATOR",
            "mutability": "IMMUTABLE",
            "data": {}
        }
    },
    "blocks": [
        {
            "data": {},
            "depth": 0,
            "entityRanges": [],
            "inlineStyleRanges": [],
            "key": "block1",
            "text": "Oil on canvas | 1913",
            "type": "unstyled"
        },
        {
            "data": {},
            "depth": 0,
            "entityRanges": [
                {
                    "offset": 16,
                    "length": 12,
                    "key": 0
                },
                {
                    "offset": 52,
                    "length": 14,
                    "key": 1
                }
            ],
            "inlineStyleRanges": [],
            "key": "block3",
            "text": "In this picture Hugo Simberg has painted his father Niclas Simberg and his son Tom on an evening stroll in Niemenlautta, the family’s summer residence near Viipuri.  Old Man and Child was the last in a series of large-format paintings with human figures that Simberg painted in the course of more than ten years. Simberg’s depictions of children and old people have an exceptionally subtle and sympathetic quality.",
            "type": "unstyled"
        },
        {
            "data": {},
            "depth": 0,
            "entityRanges": [],
            "inlineStyleRanges": [],
            "key": "block4",
            "text": "Simberg took particular care in finishing this painting by handcrafting the wooden frame for it. The painting was the single most important acquisition by Ateneum in 2015.",
            "type": "unstyled"
        }
    ]
}
