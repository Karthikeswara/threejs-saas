import React from 'react';
import {SketchPicker} from "react-color";
import {useSnapshot} from "valtio";
import state from "../store";
const ColorPicker = () => {
    const snap = useSnapshot(state)
    return (
        <div className="absolute left-full ml-3">
            <SketchPicker
                color={snap.color}
                disableAlpha
                presetColors={[
                    "#2e253b",
                    "#886f7f",
                    "#a39daa",
                    "#cdbcbb",
                    "#519a79",
                    "#91b99d",
                    "#e7e3cb",
                    "#c0a972",
                    "#ab7e67",
                    "#261f6e",
                    "#a34392",
                    "#edd9b9",
                    "#e5699c",
                    "#812b37",
                    "#658086",
                    "#273844",
                    "#7790a8",
                    "#b9d4d0",

                ]}
                onChange={(color)=> state.color=color.hex}
            />
        </div>
    );
};

export default ColorPicker;