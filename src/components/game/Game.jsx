import { Field } from "../field/Field";
import { Information } from "../information/Information";
import { GameLayout } from "./GameLayout";


export const Game = () => {

    return (
        <>
            <GameLayout />
            <Information />
            <Field />
        </>
    );
}