import React, {Component} from 'react';
import Countries from '../countries.json'
import { Link } from 'react-router-dom';
import './countryDetail.css';

class CountryDetail extends Component {
    state = {
        countrySelected: this.props,
        allCountries: Countries
    }
    
    render() {
        if (this.props.name) {
            const { name, capital, area, borders } = this.props;
            return (
                <>
                <h1>{name.common}</h1>
                <table className="table">
                    <thead></thead>
                    <tbody>
                    <tr>
                        <td>Capital</td>
                        <td>{capital}</td>
                    </tr>
                    <tr>
                        <td>Area</td>
                        <td>{area} km
                        <sup>2</sup>
                        </td>
                    </tr>
                    <tr>
                        <td>Borders</td>
                        <td>
                        <ul>
                        {borders.map((eachBorder, index) => {
                            return (
                                <li key={index}><Link to={`/${eachBorder}`} onClick={() => this.props.passedDownSecondGetCountry(eachBorder)}>{
                                    (this.state.allCountries.filter(country => country.cca3 === eachBorder))[0].name.common
                                    }</Link></li>
                            )
                        })}
                        </ul>
                        </td>
                    </tr>
                    </tbody>
                </table>
                </>
            )
        } else {
            return (
                <>
                <h3>
                    Pick a country to see its details.
                </h3>
                </>
            )
        }
    }
}

export default CountryDetail;