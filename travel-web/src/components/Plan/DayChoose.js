import React, {Component} from 'react';

class DayChoose extends Component {
    render() {
        return (
            <div className="form-group">
                <label className="text-white" htmlFor="exampleFormControlSelect1">Days</label>
                <select className="form-control" id="exampleFormControlSelect1">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    <option>6</option>
                    <option>7</option>
                    <option>8</option>
                    <option>9</option>
                    <option>10</option>
                    <option>11</option>
                    <option>12</option>
                    <option>13</option>
                    <option>14</option>
                    <option>15</option>
                </select>
            </div>
        );
    }
}

export default DayChoose;