import React, {Component} from 'react';
import PlanChoose from "./PlanChoose"
import DayChoose from "./DayChoose"
import PlaceAbrv from "./PlaceAbrv"

class Plan extends Component {
    render() {
        return (
            <div className="col-md-3 mt-3 pt-2 bg-secondary">
                <form>
                    <PlanChoose/>
                    <DayChoose/>
                </form>
                <div className="list-group">
                    <PlaceAbrv name={'Place1'}  day={'day1'} address ={'Maecenas sed diam eget risus varius blandit.'} description={'Donec id elit non mi porta.'} />
                    <PlaceAbrv name={'Place2'}  day={'day2'} address ={'Maecenas sed diam eget risus varius blandit.'} description={'Donec id elit non mi porta.'} />
                    <PlaceAbrv name={'Place3'}  day={'day3'} address ={'Maecenas sed diam eget risus varius blandit.'} description={'Donec id elit non mi porta.'} />
                    <PlaceAbrv name={'Place4'}  day={'day4'} address ={'Maecenas sed diam eget risus varius blandit.'} description={'Donec id elit non mi porta.'} />
                </div>
                <button type="button" className="btn btn-primary mt-5 float-right">Clean</button>
            </div>
        );
    }
}

export default Plan;