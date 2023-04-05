import { FC } from "react";
import { TourType } from "../types";
import { TourComponent } from "./TourComponent";

type Props = {
    tours: TourType[];
    removeTour: ( id: number ) => void;
};

export const ToursComponent: FC<Props> = ( { tours, removeTour } ) => {
    return (
        <section>
            <div className="title">
                <h2>Our Tours</h2>

                <div className="underline"></div>
            </div>

            <div>
                {
                    tours.map( ( tour ) => {
                        return <TourComponent key={ tour.id } tour={ tour } removeTour={ removeTour } />;
                    } )
                }
            </div>
        </section>
    );
};