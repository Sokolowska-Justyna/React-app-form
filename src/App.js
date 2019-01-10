import React, { Component } from 'react';

import { Selector } from './components/Selector/Selector';
import { TextInput } from './components/TextInput/TextInput';
import { emptyValue } from './constants';
import { Header } from './components/Header/Header';
import { Checkbox } from './components/Checkbox/Checkbox';
import './App.scss';
import { EmailInput } from './components/EmailInput/EmailInput';
import { SubmitButton} from './components/SubmitButton/SubmitButton';

const doctorCheckboxName = "checkbox-doctor";
const firstAgreementCheckboxName = "checkbox-first-agreement";
const secondAgreementCheckboxName = "checkbox-second-agreement";
const nameAndSurname = 'text-name-and-surname';
const specialization = 'text-specialization';
const emailAdress = 'email-adress';
const city = 'selected-city';
const voivodeship = 'selected-voivodeship';
const submitText = 'Wyślij';
const firstAgreementText = "*Wyrażam zgodę na przetwarzanie danych osobowych wskazanych w formularzu oraz profilowanie (zgodnie z art. 6 ust. 1 lit. a RODO),";
const secondAgreementText = "*Wyrażam zgodę na otrzymywanie od Usługodawcy drogą elektroniczną informacji dotyczących ofert zawarcia umowy w zakresie diagnostyki laboratoryjnej, na adres e-mail lub na numer telefonu wskazany w formularzu";

class App extends Component {
  constructor(props) {
    super(props);
    const { cities, voivodeships } = props;
    this.state = {
      cities,
      [city]: emptyValue,
      voivodeships,
      [voivodeship]: emptyValue,
      [doctorCheckboxName]: false,
      [firstAgreementCheckboxName]: false,
      [secondAgreementCheckboxName]: false,
      [nameAndSurname]: undefined,
      [specialization]: undefined,
      [emailAdress]: undefined,
    };
  }

  onCheckboxChange = (event) => {
    this.setState({ [event.target.name]: event.target.checked });
  }

  onChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit = (event) => {
    const output = {
      [doctorCheckboxName]: this.state[doctorCheckboxName],
      [firstAgreementCheckboxName]: this.state[firstAgreementCheckboxName],
      [secondAgreementCheckboxName]: this.state[secondAgreementCheckboxName],
      [emailAdress]: this.state[emailAdress],
      [nameAndSurname]: this.state[nameAndSurname],
      [specialization]: this.state[specialization],
      [voivodeship]: this.state[voivodeship],
      [city]: this.state[city],      
    }
    alert(`Form was submitted with data: ${JSON.stringify(output)}`);
    event.preventDefault();
  }

  render() {
    const {
      voivodeships,
      cities,
    } = this.state;
    const currentVoivodeship = this.state[voivodeship];
    const isVoivodeshipChosen = currentVoivodeship !== emptyValue;
    let citiesToDisplay = [];
    if (isVoivodeshipChosen) {
      citiesToDisplay = cities[currentVoivodeship].map((cityName) => ({
        [cityName]: cityName,
      }));
    }

    return (
      <form onSubmit={this.handleSubmit}>
        <div className="App">
          <Header />
         
          <Checkbox
            name={doctorCheckboxName}
            value={this.state[doctorCheckboxName]}
            onClick={this.onCheckboxChange}
            id={doctorCheckboxName}
            labelText="&nbsp;Jestem lekarzem*"
          />
          <EmailInput
            name={emailAdress}
            placeholder=" Adres Email:"
            onChange={this.onChange}
            value={this.state[emailAdress]}
            required/>
          <TextInput
            name={nameAndSurname}
            placeholder=" Imię i Nazwisko*:"
            onChange={this.onChange}
            value={this.state[nameAndSurname]}
            required />
          <TextInput
            name={specialization}
            placeholder=" Specjalizacja*:"
            onChange={this.onChange}
            value={this.state[specialization]}
            required />
          <Selector
            name={voivodeship}
            emptyValueText="Województwo*"
            currentValue={this.state[voivodeship]}
            values={voivodeships}
            onChange={this.onChange}
            required
          />
          <Selector
            name={city}
            emptyValueText="Miasto*"
            currentValue={this.state[city]}
            values={citiesToDisplay}
            onChange={this.onChange}
            required
          />
          <Checkbox
            name={firstAgreementCheckboxName}
            value={this.state[firstAgreementCheckboxName]}
            onClick={this.onCheckboxChange}
            id={firstAgreementCheckboxName}
            labelText={firstAgreementText}
          />
          <Checkbox
            name={secondAgreementCheckboxName}
            value={this.state[secondAgreementCheckboxName]}
            onClick={this.onCheckboxChange}
            id={secondAgreementCheckboxName}
            labelText={secondAgreementText}
          />
          <SubmitButton
           value={submitText} />
        </div>
      </form>
    );
  }
}

export default App;
