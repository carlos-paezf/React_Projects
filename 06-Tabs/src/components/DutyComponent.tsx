import { FC } from "react";
import { FaAngleDoubleRight } from "react-icons/fa";

type Props = {
    duty: string;
};

export const DutyComponent: FC<Props> = ( { duty } ) => {
    return (
        <div className="job-desc">
            <FaAngleDoubleRight className="job-icon"></FaAngleDoubleRight>
            <p>{ duty }</p>
        </div>
    );
};