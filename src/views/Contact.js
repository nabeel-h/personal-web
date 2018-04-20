import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Helmet from 'react-helmet';

import Main from '../layouts/Main';

import contactData from '../data/contact.json';

const messages = [
    'I need a job, plz hire me.',
    'I will now proceed to say "Thank you" in 18 different languages :)',
    'Thank you!',
    'ඔබට ස්තුතියි! (Sinhala)',
    'நன்றி! (Tamil)',
    '谢谢 (Chinese)',
    '¡Gracias! (Spanish)',
    'Je vous remercie! (French)',
    'Grazie! (Italian)',
    'Vielen Dank! (German)',
    'ありがとうございました！ (Japanese)',
    'Mahalo! (Hawaiian)',
    'תודה!' + '(Hebrew)',
    '고맙습니다! (Korean)',
    'Dziękuję Ci! (Polish)',
    'Спасибо! (Russian)',
    'Tack! (Swedish)',
    'Teşekkür ederim! (Turkish)',
    'شكرا لكم! (Arabic)',
    'Asante! (Swahili)',
    'धन्यवाद! (Hindi)',
    'Thanks for your time!'
];

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      char: 2,
      idx: 0,
      hold: 20,
      message: messages[0],
    };
  }

  componentDidMount() {
    this.timer = setInterval(() => this.tick(), 50);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  tick() {
    let { idx, char } = this.state;
    if (char - this.state.hold >= messages[idx].length) {
      idx += 1;
      char = 0;
    }
    if (idx === messages.length) {
      clearInterval(this.timer);
    } else {
      this.setState({
        idx,
        char: char + 1,
        message: messages[idx].slice(0, char + 1),
      });
    }
  }

  render() {
    const { message } = this.state;
    let data = contactData.data;
    return (
      <Main>
        <Helmet title="Contact" />
        <article className="post" id="contact">
          <header>
            <div className="title">
              <h2><Link to="/contact">Contact</Link></h2>
            </div>
          </header>
          <div className="email-at">
            <p>Thanks for checking out my site! You can email me at: </p>
            <div className="inline-container">
              <a href="mailto:n.hussain@protonmail.com">
                <span>n.hussain</span>
                <span>@protonmail.com</span>
              </a>
              <p>{message}</p>
            </div>
          </div>
          <ul className="icons">
            {data.map(s => (
              <li key={s.label}>
                <a href={s.link} className={s.icon}><span className="label">{s.label}</span></a>
              </li>
            ))}
          </ul>
        </article>
      </Main>
    );
  }
}
export default Contact;