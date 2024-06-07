import React, { useContext, useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import SiteNavbar from '../../components/navbar/SiteNavbar';
import SiteHomeFooter from '../../components/home/SiteHomeFooter';
import { CartContext } from '../../context/CartContext';
import { useNavigate } from 'react-router-dom';

export default function SendOrder() {
  const { cartItems, cartCount, clearCart } = useContext(CartContext);
  const [email, setEmail] = useState();
  const [cellulare, setCellulare] = useState();
  const [nome, setNome] = useState();
  const [cognome, setCognome] = useState();
  const [societa, setSocieta] = useState();
  const [indirizzo, setIndirizzo] = useState();
  const [indirizzo2, setIndirizzo2] = useState();
  const [citta, setCitta] = useState();
  const [stato, setStato] = useState();
  const [provincia, setProvincia] = useState();
  const [cap, setCap] = useState();
  const [note, setNote] = useState();
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    let updatedProducts = [];
    cartItems.forEach(item => {
      for (let i = 0; i < item.quantity; i++) {
        updatedProducts.push(item._id);
      }
    });
    setProducts(updatedProducts);
  }, [cartItems]);

  const calculateSubtotal = () => {
    return cartItems.reduce((total, item) => total + item.prezzo * item.quantity, 0);
  };

  const spedizione = 4.90;
  const subtotale = calculateSubtotal();
  const totale = subtotale + spedizione;

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:3001/orders", {
        method: `POST`,
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
            email: email,
            cellulare: cellulare,
            nome: nome,
            cognome: cognome,
            societa: societa,
            indirizzo: indirizzo,
            indirizzo2: indirizzo2,
            citta: citta,
            stato: stato,
            provincia: provincia,
            cap: cap,
            note: note,
            products: products,
            prezzototale: totale,
        }),
      });

      if (response.ok) {
        const emailResponse = await fetch("http://localhost:3001/acquistocompletato", {
          method: `POST`,
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            email: email,
            nome: nome,
            cognome: cognome,
            ordine: products,
            totale: totale
          }),
        });

        if (emailResponse.ok) {
          alert('Ordine effettuato con successo! Un riepilogo è stato mandato alla tua email!');
        } else {
          alert('Ordine effettuato con successo! Non siamo riusciti a inviarti il riepilogo via email!');
        }
        
        clearCart();
        navigate("/shop/orderconfirmed");
      } else {
        alert('Ordine fallito!');
      }

    } catch (error) {
      alert("Errore nell'invio dell'ordine: ", error);
    }
  };

  const formatPrice = (price) => {
    const priceNumber = parseFloat(price);
    return priceNumber.toLocaleString('it-IT', { minimumFractionDigits: 2 });
}

  return (
    <>
      <SiteNavbar />
      <Container>
        <Row className='mt-4 mb-4'>
          <Col md={12}>
            <h2>completa l'ordine</h2>
          </Col>

          <Col xs={12} sm={12} md={12} lg={6} xl={6} className='mt-3'>
            <h3>Riepilogo ordine</h3>
            <h6>Totale articoli: {cartCount}</h6>
              <ListGroup>
                {cartItems.map((item) => (
                  <ListGroup.Item
                    key={item._id}
                    className='d-flex justify-content-between align-items-center'>
                    <div>
                      <img src={item.immagine} alt="img_prodotto" className='img_product_card'/>
                      <span style={{ fontWeight: '700', marginLeft: '10px' }}>{item.prodotto}</span>
                      <span style={{ fontWeight: '500', marginLeft: '5px' }}>{formatPrice(item.prezzo)}€</span>
                      <span style={{ fontWeight: '600', marginLeft: '10px' }}>x{item.quantity}</span>
                    </div>
                  </ListGroup.Item>
                ))}
              </ListGroup>
              <div className="subtotal mt-3">
                <h6>Subtotale: {formatPrice(subtotale)}€</h6>
                <h6>Spedizione: Corriere Espresso {formatPrice(spedizione)}€</h6>
                <h5>Totale: {formatPrice(totale)}€</h5>
              </div>
            </Col>

            <Col xs={12} sm={12} md={12} lg={6} xl={6} className='mt-3'>
                <h3>Inserisci dati</h3>
    <Form onSubmit={handleSubmit}>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Email*</Form.Label>
          <Form.Control type="email" placeholder="Email" required="required" onChange={(e) => setEmail(e.target.value)}/>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridCel">
          <Form.Label>Cellulare*</Form.Label>
          <Form.Control type="tel" placeholder="Cellulare" maxLength="10" required="required" onChange={(e) => setCellulare(e.target.value)}/>
        </Form.Group>
      </Row>

      <Row className="mb-3">
      <Form.Group as={Col} controlId="formGridName">
        <Form.Label>Nome*</Form.Label>
        <Form.Control placeholder="Nome" required="required" onChange={(e) => setNome(e.target.value)}/>
      </Form.Group>

      <Form.Group as={Col} controlId="formGridSurname">
        <Form.Label>Cognome*</Form.Label>
        <Form.Control placeholder="Cognome" required="required" onChange={(e) => setCognome(e.target.value)}/>
      </Form.Group>
      </Row>

      <Form.Group className="mb-3" controlId="formGridNameSociety">
        <Form.Label>Nome società</Form.Label>
        <Form.Control placeholder="Nome società (opzionale)" onChange={(e) => setSocieta(e.target.value)}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formGridAddress1">
        <Form.Label>Indirizzo*</Form.Label>
        <Form.Control placeholder="Via/Piazza e Numero Civico" required="required" onChange={(e) => setIndirizzo(e.target.value)}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formGridAddress2">
        <Form.Label>Indirizzo 2</Form.Label>
        <Form.Control placeholder="Interno, scala, unità, ecc. (opzionale)" onChange={(e) => setIndirizzo2(e.target.value)}/>
      </Form.Group>

      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridCity">
          <Form.Label>Città*</Form.Label>
          <Form.Control placeholder='Fidenza' required="required" onChange={(e) => setCitta(e.target.value)}/>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridState">
          <Form.Label>Stato*</Form.Label>
          <Form.Select defaultValue="Scegli..." required="required" onChange={(e) => setStato(e.target.value)}>
            <option>Scegli...</option>
                <option value="Afghanistan">Afghanistan</option>
                <option value="Åland Islands">Åland Islands</option>
                <option value="Albania">Albania</option>
                <option value="Algeria">Algeria</option>
                <option value="American Samoa">American Samoa</option>
                <option value="Andorra">Andorra</option>
                <option value="Angola">Angola</option>
                <option value="Anguilla">Anguilla</option>
                <option value="Antarctica">Antarctica</option>
                <option value="Antigua and Barbuda">Antigua and Barbuda</option>
                <option value="Argentina">Argentina</option>
                <option value="Armenia">Armenia</option>
                <option value="Aruba">Aruba</option>
                <option value="Australia">Australia</option>
                <option value="Austria">Austria</option>
                <option value="Azerbaijan">Azerbaijan</option>
                <option value="Bahamas">Bahamas</option>
                <option value="Bahrain">Bahrain</option>
                <option value="Bangladesh">Bangladesh</option>
                <option value="Barbados">Barbados</option>
                <option value="Belarus">Belarus</option>
                <option value="Belgium">Belgium</option>
                <option value="Belize">Belize</option>
                <option value="Benin">Benin</option>
                <option value="Bermuda">Bermuda</option>
                <option value="Bhutan">Bhutan</option>
                <option value="Bolivia">Bolivia</option>
                <option value="Bosnia and Herzegovina">Bosnia and Herzegovina</option>
                <option value="Botswana">Botswana</option>
                <option value="Bouvet Island">Bouvet Island</option>
                <option value="Brazil">Brazil</option>
                <option value="British Indian Ocean Territory">British Indian Ocean Territory</option>
                <option value="Brunei Darussalam">Brunei Darussalam</option>
                <option value="Bulgaria">Bulgaria</option>
                <option value="Burkina Faso">Burkina Faso</option>
                <option value="Burundi">Burundi</option>
                <option value="Cambodia">Cambodia</option>
                <option value="Cameroon">Cameroon</option>
                <option value="Canada">Canada</option>
                <option value="Cape Verde">Cape Verde</option>
                <option value="Cayman Islands">Cayman Islands</option>
                <option value="Central African Republic">Central African Republic</option>
                <option value="Chad">Chad</option>
                <option value="Chile">Chile</option>
                <option value="China">China</option>
                <option value="Christmas Island">Christmas Island</option>
                <option value="Cocos (Keeling) Islands">Cocos (Keeling) Islands</option>
                <option value="Colombia">Colombia</option>
                <option value="Comoros">Comoros</option>
                <option value="Congo">Congo</option>
                <option value="Congo, The Democratic Republic of The">Congo, The Democratic Republic of The</option>
                <option value="Cook Islands">Cook Islands</option>
                <option value="Costa Rica">Costa Rica</option>
                <option value="Cote D'ivoire">Cote D'ivoire</option>
                <option value="Croatia">Croatia</option>
                <option value="Cuba">Cuba</option>
                <option value="Cyprus">Cyprus</option>
                <option value="Czech Republic">Czech Republic</option>
                <option value="Denmark">Denmark</option>
                <option value="Djibouti">Djibouti</option>
                <option value="Dominica">Dominica</option>
                <option value="Dominican Republic">Dominican Republic</option>
                <option value="Ecuador">Ecuador</option>
                <option value="Egypt">Egypt</option>
                <option value="El Salvador">El Salvador</option>
                <option value="Equatorial Guinea">Equatorial Guinea</option>
                <option value="Eritrea">Eritrea</option>
                <option value="Estonia">Estonia</option>
                <option value="Ethiopia">Ethiopia</option>
                <option value="Falkland Islands (Malvinas)">Falkland Islands (Malvinas)</option>
                <option value="Faroe Islands">Faroe Islands</option>
                <option value="Fiji">Fiji</option>
                <option value="Finland">Finland</option>
                <option value="France">France</option>
                <option value="French Guiana">French Guiana</option>
                <option value="French Polynesia">French Polynesia</option>
                <option value="French Southern Territories">French Southern Territories</option>
                <option value="Gabon">Gabon</option>
                <option value="Gambia">Gambia</option>
                <option value="Georgia">Georgia</option>
                <option value="Germany">Germany</option>
                <option value="Ghana">Ghana</option>
                <option value="Gibraltar">Gibraltar</option>
                <option value="Greece">Greece</option>
                <option value="Greenland">Greenland</option>
                <option value="Grenada">Grenada</option>
                <option value="Guadeloupe">Guadeloupe</option>
                <option value="Guam">Guam</option>
                <option value="Guatemala">Guatemala</option>
                <option value="Guernsey">Guernsey</option>
                <option value="Guinea">Guinea</option>
                <option value="Guinea-bissau">Guinea-bissau</option>
                <option value="Guyana">Guyana</option>
                <option value="Haiti">Haiti</option>
                <option value="Heard Island and Mcdonald Islands">Heard Island and Mcdonald Islands</option>
                <option value="Holy See (Vatican City State)">Holy See (Vatican City State)</option>
                <option value="Honduras">Honduras</option>
                <option value="Hong Kong">Hong Kong</option>
                <option value="Hungary">Hungary</option>
                <option value="Iceland">Iceland</option>
                <option value="India">India</option>
                <option value="Indonesia">Indonesia</option>
                <option value="Iran, Islamic Republic of">Iran, Islamic Republic of</option>
                <option value="Iraq">Iraq</option>
                <option value="Ireland">Ireland</option>
                <option value="Isle of Man">Isle of Man</option>
                <option value="Israel">Israel</option>
                <option value="Italy">Italy</option>
                <option value="Jamaica">Jamaica</option>
                <option value="Japan">Japan</option>
                <option value="Jersey">Jersey</option>
                <option value="Jordan">Jordan</option>
                <option value="Kazakhstan">Kazakhstan</option>
                <option value="Kenya">Kenya</option>
                <option value="Kiribati">Kiribati</option>
                <option value="Korea, Democratic People's Republic of">Korea, Democratic People's Republic of</option>
                <option value="Korea, Republic of">Korea, Republic of</option>
                <option value="Kuwait">Kuwait</option>
                <option value="Kyrgyzstan">Kyrgyzstan</option>
                <option value="Lao People's Democratic Republic">Lao People's Democratic Republic</option>
                <option value="Latvia">Latvia</option>
                <option value="Lebanon">Lebanon</option>
                <option value="Lesotho">Lesotho</option>
                <option value="Liberia">Liberia</option>
                <option value="Libyan Arab Jamahiriya">Libyan Arab Jamahiriya</option>
                <option value="Liechtenstein">Liechtenstein</option>
                <option value="Lithuania">Lithuania</option>
                <option value="Luxembourg">Luxembourg</option>
                <option value="Macao">Macao</option>
                <option value="Macedonia, The Former Yugoslav Republic of">Macedonia, The Former Yugoslav Republic of</option>
                <option value="Madagascar">Madagascar</option>
                <option value="Malawi">Malawi</option>
                <option value="Malaysia">Malaysia</option>
                <option value="Maldives">Maldives</option>
                <option value="Mali">Mali</option>
                <option value="Malta">Malta</option>
                <option value="Marshall Islands">Marshall Islands</option>
                <option value="Martinique">Martinique</option>
                <option value="Mauritania">Mauritania</option>
                <option value="Mauritius">Mauritius</option>
                <option value="Mayotte">Mayotte</option>
                <option value="Mexico">Mexico</option>
                <option value="Micronesia, Federated States of">Micronesia, Federated States of</option>
                <option value="Moldova, Republic of">Moldova, Republic of</option>
                <option value="Monaco">Monaco</option>
                <option value="Mongolia">Mongolia</option>
                <option value="Montenegro">Montenegro</option>
                <option value="Montserrat">Montserrat</option>
                <option value="Morocco">Morocco</option>
                <option value="Mozambique">Mozambique</option>
                <option value="Myanmar">Myanmar</option>
                <option value="Namibia">Namibia</option>
                <option value="Nauru">Nauru</option>
                <option value="Nepal">Nepal</option>
                <option value="Netherlands">Netherlands</option>
                <option value="Netherlands Antilles">Netherlands Antilles</option>
                <option value="New Caledonia">New Caledonia</option>
                <option value="New Zealand">New Zealand</option>
                <option value="Nicaragua">Nicaragua</option>
                <option value="Niger">Niger</option>
                <option value="Nigeria">Nigeria</option>
                <option value="Niue">Niue</option>
                <option value="Norfolk Island">Norfolk Island</option>
                <option value="Northern Mariana Islands">Northern Mariana Islands</option>
                <option value="Norway">Norway</option>
                <option value="Oman">Oman</option>
                <option value="Pakistan">Pakistan</option>
                <option value="Palau">Palau</option>
                <option value="Palestinian Territory, Occupied">Palestinian Territory, Occupied</option>
                <option value="Panama">Panama</option>
                <option value="Papua New Guinea">Papua New Guinea</option>
                <option value="Paraguay">Paraguay</option>
                <option value="Peru">Peru</option>
                <option value="Philippines">Philippines</option>
                <option value="Pitcairn">Pitcairn</option>
                <option value="Poland">Poland</option>
                <option value="Portugal">Portugal</option>
                <option value="Puerto Rico">Puerto Rico</option>
                <option value="Qatar">Qatar</option>
                <option value="Reunion">Reunion</option>
                <option value="Romania">Romania</option>
                <option value="Russian Federation">Russian Federation</option>
                <option value="Rwanda">Rwanda</option>
                <option value="Saint Helena">Saint Helena</option>
                <option value="Saint Kitts and Nevis">Saint Kitts and Nevis</option>
                <option value="Saint Lucia">Saint Lucia</option>
                <option value="Saint Pierre and Miquelon">Saint Pierre and Miquelon</option>
                <option value="Saint Vincent and The Grenadines">Saint Vincent and The Grenadines</option>
                <option value="Samoa">Samoa</option>
                <option value="San Marino">San Marino</option>
                <option value="Sao Tome and Principe">Sao Tome and Principe</option>
                <option value="Saudi Arabia">Saudi Arabia</option>
                <option value="Senegal">Senegal</option>
                <option value="Serbia">Serbia</option>
                <option value="Seychelles">Seychelles</option>
                <option value="Sierra Leone">Sierra Leone</option>
                <option value="Singapore">Singapore</option>
                <option value="Slovakia">Slovakia</option>
                <option value="Slovenia">Slovenia</option>
                <option value="Solomon Islands">Solomon Islands</option>
                <option value="Somalia">Somalia</option>
                <option value="South Africa">South Africa</option>
                <option value="South Georgia and The South Sandwich Islands">South Georgia and The South Sandwich Islands</option>
                <option value="Spain">Spain</option>
                <option value="Sri Lanka">Sri Lanka</option>
                <option value="Sudan">Sudan</option>
                <option value="Suriname">Suriname</option>
                <option value="Svalbard and Jan Mayen">Svalbard and Jan Mayen</option>
                <option value="Swaziland">Swaziland</option>
                <option value="Sweden">Sweden</option>
                <option value="Switzerland">Switzerland</option>
                <option value="Syrian Arab Republic">Syrian Arab Republic</option>
                <option value="Taiwan">Taiwan</option>
                <option value="Tajikistan">Tajikistan</option>
                <option value="Tanzania, United Republic of">Tanzania, United Republic of</option>
                <option value="Thailand">Thailand</option>
                <option value="Timor-leste">Timor-leste</option>
                <option value="Togo">Togo</option>
                <option value="Tokelau">Tokelau</option>
                <option value="Tonga">Tonga</option>
                <option value="Trinidad and Tobago">Trinidad and Tobago</option>
                <option value="Tunisia">Tunisia</option>
                <option value="Turkey">Turkey</option>
                <option value="Turkmenistan">Turkmenistan</option>
                <option value="Turks and Caicos Islands">Turks and Caicos Islands</option>
                <option value="Tuvalu">Tuvalu</option>
                <option value="Uganda">Uganda</option>
                <option value="Ukraine">Ukraine</option>
                <option value="United Arab Emirates">United Arab Emirates</option>
                <option value="United Kingdom">United Kingdom</option>
                <option value="United States">United States</option>
                <option value="United States Minor Outlying Islands">United States Minor Outlying Islands</option>
                <option value="Uruguay">Uruguay</option>
                <option value="Uzbekistan">Uzbekistan</option>
                <option value="Vanuatu">Vanuatu</option>
                <option value="Venezuela">Venezuela</option>
                <option value="Viet Nam">Viet Nam</option>
                <option value="Virgin Islands, British">Virgin Islands, British</option>
                <option value="Virgin Islands, U.S.">Virgin Islands, U.S.</option>
                <option value="Wallis and Futuna">Wallis and Futuna</option>
                <option value="Western Sahara">Western Sahara</option>
                <option value="Yemen">Yemen</option>
                <option value="Zambia">Zambia</option>
                <option value="Zimbabwe">Zimbabwe</option>
          </Form.Select>
        </Form.Group>
        </Row>

        <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridProvincia">
          <Form.Label>Provincia*</Form.Label>
          <Form.Control placeholder='Parma' required="required" onChange={(e) => setProvincia(e.target.value)}/>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridCap">
          <Form.Label>CAP*</Form.Label>
          <Form.Control placeholder='43036' required="required" onChange={(e) => setCap(e.target.value)}/>
        </Form.Group>
      </Row>

        <Form.Group className="mb-4" controlId="formGridAddress2">
        <Form.Label>Note</Form.Label>
        <Form.Control placeholder="Aggiungi altre informazioni utili per il corriere..." onChange={(e) => setNote(e.target.value)}/>
        </Form.Group>

        <hr></hr>

        <Form.Group className="mb-3" controlId="formGridCarta">
          <Form.Label>Numero carta*</Form.Label>
          <Form.Control type="text" placeholder="1234 1234 1234 1234" maxLength="19" required="required"/>
        </Form.Group>

        <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridMeseScadenza">
          <Form.Label>Mese*</Form.Label>
          <Form.Control type="number" placeholder="MM" min='1' max='12' required="required"/>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridScadenza">
          <Form.Label>Anno*</Form.Label>
          <Form.Control type="number" placeholder="AA" min='24' max="99" required="required"/>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridCVC">
          <Form.Label>Codice segreto*</Form.Label>
          <Form.Control type="text" placeholder="CVC" maxLength="3" required="required"/>
        </Form.Group>
      </Row>


      <Form.Group className="mb-3" id="formGridCheckbox">
        <Form.Check type="checkbox" label="Ho letto e accetto termini e condizioni del sito*" required="required" />
      </Form.Group>

      <p>* campi obbligatori</p>

      <Button className='me-2' variant="success" type="submit" style={{backgroundColor:'#558259'}}>
        Conferma acquisto
      </Button>
      </Form>
        </Col>
        </Row>
      </Container>
      <SiteHomeFooter />
    </>
  );
}
