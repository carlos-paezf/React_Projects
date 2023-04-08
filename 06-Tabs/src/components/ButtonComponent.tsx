import { Dispatch, FC, SetStateAction } from "react";
import { JobType } from "../types";

type Props = {
    index: number;
    job: JobType;
    value: number;
    setValue: Dispatch<SetStateAction<number>>;
};

export const ButtonComponent: FC<Props> = ( { index, job, value, setValue } ) => {
    return (
        <button className={ `job-btn ${ index === value && 'active-btn' }` } onClick={ () => setValue( index ) }>
            { job.company }
        </button>
    );
};