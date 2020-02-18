import React from 'react';
import './Tourguide.css';

import DatePicker from "react-datepicker";
import Select from "react-select";
import StarRatings from "react-star-ratings";



const options_time = [
    { value: '0500', label: '05:00' },
    { value: '0530', label: '05:30' },
    { value: '0600', label: '06:00' },
    { value: '0630', label: '06:30' },
    { value: '0700', label: '07:00' },
    { value: '0730', label: '07:30' },
    { value: '0800', label: '08:00' },
    { value: '0830', label: '08:30' },
    { value: '0900', label: '09:00' }
];

const options_duration = [
    { value: '05', label: '0.5 hour' },
    { value: '10', label: '1 hour' },
    { value: '15', label: '1.5 hour' },
    { value: '20', label: '2 hour' },
    { value: '25', label: '2.5 hour' },
    { value: '30', label: '3 hour' },
    { value: '35', label: '3.5 hour' },
    { value: '40', label: '4 hour' },
    { value: '45', label: '4.5 hour' },
    { value: '50', label: '5 hour' }
];

const options_size = [
    { value: '1', label: '1' },
    { value: '2', label: '2' },
    { value: '3', label: '3' },
    { value: '4', label: '4' },
    { value: '5', label: '5' },
    { value: '6', label: '6' }
];

const options_language = [
    { value: '1', label: 'English' },
    { value: '2', label: 'Spanish' },
    { value: '3', label: 'Chinese' },
    { value: '4', label: 'Japanese' },
    { value: '5', label: 'Korean' },
    { value: '6', label: 'Hindi' }
];

const options_major = [
    { value: '1', label: 'Computer Science' },
    { value: '2', label: 'Engineering' },
    { value: '3', label: 'Social Sciences' },
    { value: '4', label: 'Humanities' },
    { value: '5', label: 'Other' }
];

class Home extends React.Component {
    state = {
        startDate: new Date(),
        startTime: null,
        duration: null,
        groupSize: null,
        rating: 4,
    };
    
    handleChange = date => {
        this.setState({
            startDate: date
        });
    };

    handleTimeChange = startTime => {
        this.setState(
            { startTime }
        );
    };

    handleDurationChange = duration => {
        this.setState(
            { duration }
        );
    };

    handleSizeChange = groupSize => {
        this.setState(
            { groupSize }
        );
    };

    render() {
        const ExampleCustomInput = ({ value, onClick }) => (
            <button class="custom-input" onClick={onClick}>
              {value}
            </button>
        );

        return (
            <body>
                <div id="tourguide_menubar">
                    <div id="tourguide_guide_image"></div>
                </div>
                <div id="tourguide_tour__mainpage">
                    <div class="split" id="tourguide_sidebar">
                    <div id="tourguide_guide_img_container">
                            <img id="tourguide_guide_img" 
                                 src= { require('../../imgs/default-profile-picture1.jpg') } 
                                 width='350px' />
                        </div>
                        <div class="guide-text">
                            <div class="guide-name">
                                <b>Collin</b>
                            </div>
                            <div class="guide-language">
                                <p>
                                    <b>Languages: </b>English, Korean
                                </p>
                            </div>
                            <div class="guide-major">
                                <p>
                                    <b>Major: </b>Electrical Engineering
                                </p>
                            </div>
                            <StarRatings
                                rating={this.state.rating}
                                starRatedColor="#FEB156"
                                numberOfStars={5}
                                name='rating'
                                class='ratings'
                                starDimension='25px'
                                starSpacing='1px'
                            />
                        </div>

                    </div>
                    <div class="split" id="tourguide_guide-list">
                        <div class="guidebox">
                            <div class="guide-image"></div>
                            <div class="guide-text">
                                <div class="guide-name">
                                    <b>Collin</b>
                                </div>
                                <div class="guide-language">
                                    <p>
                                        <b>Languages: </b>English, Korean
                                    </p>
                                </div>
                                <div class="guide-major">
                                    <p>
                                        <b>Major: </b>Electrical Engineering
                                    </p>
                                </div>
                                <StarRatings
                                    rating={this.state.rating}
                                    starRatedColor="#FEB156"
                                    numberOfStars={5}
                                    name='rating'
                                    class='ratings'
                                    starDimension='25px'
                                    starSpacing='1px'
                                />
                            </div>
                        </div>
                        <div class="guidebox">
                            <div class="guide-image"></div>
                            <div class="guide-text">
                                <div class="guide-name">
                                    <b>Collin</b>
                                </div>
                                <div class="guide-language">
                                    <p>
                                        <b>Languages: </b>English, Korean
                                    </p>
                                </div>
                                <div class="guide-major">
                                    <p>
                                        <b>Major: </b>Electrical Engineering
                                    </p>
                                </div>
                                <StarRatings
                                    rating={this.state.rating}
                                    starRatedColor="#FEB156"
                                    numberOfStars={5}
                                    name='rating'
                                    class='ratings'
                                    starDimension='25px'
                                    starSpacing='1px'
                                />
                            </div>
                        </div>
                        <div class="guidebox">
                            <div class="guide-image"></div>
                            <div class="guide-text">
                                <div class="guide-name">
                                    <b>Collin</b>
                                </div>
                                <div class="guide-language">
                                    <p>
                                        <b>Languages: </b>English, Korean
                                    </p>
                                </div>
                                <div class="guide-major">
                                    <p>
                                        <b>Major: </b>Electrical Engineering
                                    </p>
                                </div>
                                <StarRatings
                                    rating={this.state.rating}
                                    starRatedColor="#FEB156"
                                    numberOfStars={5}
                                    name='rating'
                                    class='ratings'
                                    starDimension='25px'
                                    starSpacing='1px'
                                />
                            </div>
                        </div>
                        <div class="guidebox">
                            <div class="guide-image"></div>
                            <div class="guide-text">
                                <div class="guide-name">
                                    <b>Collin</b>
                                </div>
                                <div class="guide-language">
                                    <p>
                                        <b>Languages: </b>English, Korean
                                    </p>
                                </div>
                                <div class="guide-major">
                                    <p>
                                        <b>Major: </b>Electrical Engineering
                                    </p>
                                </div>
                                <StarRatings
                                    rating={this.state.rating}
                                    starRatedColor="#FEB156"
                                    numberOfStars={5}
                                    name='rating'
                                    class='ratings'
                                    starDimension='25px'
                                    starSpacing='1px'
                                />
                            </div>
                        </div>
                        <div class="guidebox">
                            <div class="guide-image"></div>
                            <div class="guide-text">
                                <div class="guide-name">
                                    <b>Collin</b>
                                </div>
                                <div class="guide-language">
                                    <p>
                                        <b>Languages: </b>English, Korean
                                    </p>
                                </div>
                                <div class="guide-major">
                                    <p>
                                        <b>Major: </b>Electrical Engineering
                                    </p>
                                </div>
                                <StarRatings
                                    rating={this.state.rating}
                                    starRatedColor="#FEB156"
                                    numberOfStars={5}
                                    name='rating'
                                    class='ratings'
                                    starDimension='25px'
                                    starSpacing='1px'
                                />
                            </div>
                        </div>
                        <div class="guidebox">
                            <div class="guide-image"></div>
                            <div class="guide-text">
                                <div class="guide-name">
                                    <b>Collin</b>
                                </div>
                                <div class="guide-language">
                                    <p>
                                        <b>Languages: </b>English, Korean
                                    </p>
                                </div>
                                <div class="guide-major">
                                    <p>
                                        <b>Major: </b>Electrical Engineering
                                    </p>
                                </div>
                                <StarRatings
                                    rating={this.state.rating}
                                    starRatedColor="#FEB156"
                                    numberOfStars={5}
                                    name='rating'
                                    class='ratings'
                                    starDimension='25px'
                                    starSpacing='1px'
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </body>
        )
  }
}

export default Home;