import { FC } from "react";
import { JobType } from "../types";
import { DutyComponent } from "./DutyComponent";

export const JobComponent: FC<JobType> = ( { title, company, dates, duties } ) => {
    return (
        <article className="job-info">
            <h3>{ title }</h3>
            <h4>{ company }</h4>

            <p className="job-date">{ dates }</p>

            {
                duties.map( ( duty, idx ) => <DutyComponent key={ idx } duty={ duty } /> )
            }
        </article>
    );
}; 