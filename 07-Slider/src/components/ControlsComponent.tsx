import { Dispatch, FC, SetStateAction } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

type Props = {
    index: number;
    setIndex: Dispatch<SetStateAction<number>>;
};

export const ControlsComponent: FC<Props> = ( { index, setIndex } ) => {
    return (
        <>
            <button className="prev" onClick={ () => setIndex( index - 1 ) }>
                <FiChevronLeft />
            </button>

            <button className="next" onClick={ () => setIndex( index + 1 ) }>
                <FiChevronRight />
            </button>
        </>
    );
};