import React from "react";
import fruit1 from "../assets/img/Fruits/fruit1.png";
import fruit2 from "../assets/img/Fruits/fruit2.png";
import fruit3 from "../assets/img/Fruits/fruit3.jpg";
import fruit4 from "../assets/img/Fruits/fruit4.jpg";
import fruit5 from "../assets/img/Fruits/fruit5.jpg";
import fruit6 from "../assets/img/Fruits/fruit6.jpg";
import fruit7 from "../assets/img/Fruits/fruit7.jpg";
import fruit8 from "../assets/img/Fruits/fruit8.jpg";
import fruit9 from "../assets/img/Fruits/fruit9.jpg";
import fruit10 from "../assets/img/Fruits/fruit10.jpg";
import fruit11 from "../assets/img/Fruits/fruit11.png";
import { Button, Col, Row } from "reactstrap";
import "../css/fruits.css";

const Fruits = () => {
  return (
    <>
      <div className="container my-5">
        <h3
          className="d-flex justify-content-center"
          style={{
            fontFamily: " Playfair Display",
            fontSize: "45px",
            fontStyle: "italic",
            fontWeight: 700,
          }}
        >
          Fruits
        </h3>

        <Row className="align-items-flex-start fruits-main justify-content-center my-5">
          <h3 className="d-flex justify-content-center mb-5">
            10 Health Benefits of Mangoes
          </h3>
          <Col className="d-flex justify-content-start">
            <ul>
              <ol className="my-2 list">1. Combats Acidity</ol>
              <ol className="my-2 list">2. Blood Cleanser</ol>
              <ol className="my-2 list">
                3. Good for Normalising Insulin Levels
              </ol>
              <ol className="my-2 list">4. Promotes Good Eyesight</ol>
              <ol className="my-2 list">5. Lowers Cholesterol</ol>
              <ol className="my-2 list">6. Clears Skin</ol>
              <ol className="my-2 list">7. Prevents Cancer</ol>
              <ol className="my-2 list">8.Repairs Poor Digestion</ol>
              <ol className="my-2 list">9. Boosts Immune System</ol>
              <ol className="my-2 list">10. Heat Stroke Remedy</ol>
            </ul>
          </Col>
          <Col
            className="d-flex justify-content-center"
            style={{ flexDirection: "column" }}
          >
            <img src={fruit1} alt="" width="500px" className="mx-auto" />
            <Button className="btn mt-3 product-button d-flex mx-auto">
              Whatsapp
            </Button>
          </Col>
        </Row>
        <Row className="align-items-flex-start fruits-main justify-content-center my-5">
          <h3 className="d-flex justify-content-center mb-5">
            Benefits of Bananas
          </h3>
          <Col
            className="d-flex justify-content-center"
            style={{ flexDirection: "column" }}
          >
            <img src={fruit2} alt="" width="500px" className="mx-auto" />
            <Button className="btn mt-3 product-button d-flex mx-auto">
              Whatsapp
            </Button>
          </Col>
          <Col className="d-flex justify-content-start">
            <ul>
              <ol className="my-2 list">1. Reduce depression</ol>
              <ol className="my-2 list">2. Regulate the bowel system</ol>
              <ol className="my-2 list">
                3. Reduce blood pressure & risk of heart disease
              </ol>
              <ol className="my-2 list">4. Help our bones grow stronger</ol>
              <ol className="my-2 list">5. Help individuals to quit smoking</ol>
              <ol className="my-2 list">6. Help prevent anemia</ol>
              <ol className="my-2 list">7. Provide us with energy</ol>
              <ol className="my-2 list">8. Reduce menstrual pains</ol>
              <ol className="my-2 list">9. Power our brains</ol>
              <ol className="my-2 list">10. Help prevent ulcers</ol>
            </ul>
          </Col>
        </Row>
        <Row className="align-items-flex-start fruits-main justify-content-center my-5">
          <h3 className="d-flex justify-content-center mb-5">
            BENEFITS OF LEMON
          </h3>
          <Col className="d-flex justify-content-start">
            <ul>
              <ol className="my-2 list">1. Calcium</ol>
              <ol className="my-2 list">2. Copper</ol>
              <ol className="my-2 list">3. Iron</ol>
              <ol className="my-2 list">4. Phosphorous</ol>
              <ol className="my-2 list">5. Selenium</ol>
              <ol className="my-2 list">6. Vitamin B1</ol>
              <ol className="my-2 list">7. Vitamin B2</ol>
              <ol className="my-2 list">8.Vitamin B6</ol>
            </ul>
          </Col>
          <Col
            className="d-flex justify-content-center"
            style={{ flexDirection: "column" }}
          >
            <img src={fruit3} alt="" width="500px" className="mx-auto" />
            <Button className="btn mt-3 product-button d-flex mx-auto">
              Whatsapp
            </Button>
          </Col>
        </Row>
        <Row className="align-items-flex-start fruits-main justify-content-center my-5">
          <h3 className="d-flex justify-content-center mb-5">
            10 Wonderful Health Benefits of Oranges
          </h3>
          <Col
            className="d-flex justify-content-center"
            style={{ flexDirection: "column" }}
          >
            <img src={fruit4} alt="" width="500px" className="mx-auto" />
            <Button className="btn mt-3 product-button d-flex mx-auto">
              Whatsapp
            </Button>
          </Col>
          <Col className="d-flex justify-content-start">
            <ul>
              <ol className="my-2 list">1. Full of vitamins & Minerals.</ol>
              <ol className="my-2 list">2. Protects Cardiovascular System.</ol>
              <ol className="my-2 list">3. Keep Teeth & Bones Healthy</ol>
              <ol className="my-2 list">4. Ragulates Blood Pressure.</ol>
              <ol className="my-2 list">5. Grill Heat Aid</ol>
              <ol className="my-2 list">6. Lowers Choleste</ol>
              <ol className="my-2 list">7. Protects Kidney</ol>
              <ol className="my-2 list">8. Fights Infections</ol>
              <ol className="my-2 list">9. Protects skins</ol>
              <ol className="my-2 list">10. Purifies Blood</ol>
              <ol className="my-2 list">11. Full Fibre</ol>
            </ul>
          </Col>
        </Row>
        <Row className="align-items-flex-start fruits-main justify-content-center my-5">
          <h3 className="d-flex justify-content-center mb-5">
            Health Benefits of Carrots
          </h3>
          <Col className="d-flex justify-content-start">
            <ul>
              <ol className="my-2 list">1. Improved Vision</ol>
              <ol className="my-2 list">2. Macular Degeneration</ol>
              <ol className="my-2 list">3. Anti-Aging</ol>
              <ol className="my-2 list">4. Healthy Glowing Skin</ol>
              <ol className="my-2 list">5. A Powerful Antiseptic</ol>
              <ol className="my-2 list">6. Prevent Heart Disease</ol>
              <ol className="my-2 list">7. Cleanse the Body</ol>
              <ol className="my-2 list">8. Healthy Teeth and Gums</ol>
              <ol className="my-2 list">9. Prevent Stroke</ol>
              <ol className="my-2 list">10. Cancer Prevention</ol>
            </ul>
          </Col>
          <Col
            className="d-flex justify-content-center"
            style={{ flexDirection: "column" }}
          >
            <img src={fruit5} alt="" width="500px" className="mx-auto" />
            <Button className="btn mt-3 product-button d-flex mx-auto">
              Whatsapp
            </Button>
          </Col>
        </Row>
        <Row className="align-items-flex-start fruits-main justify-content-center my-5">
          <h3 className="d-flex justify-content-center mb-5">
            Health Benefits of Muskmelon
          </h3>
          <Col
            className="d-flex justify-content-center"
            style={{ flexDirection: "column" }}
          >
            <img src={fruit6} alt="" width="500px" className="mx-auto" />
            <Button className="btn mt-3 product-button d-flex mx-auto">
              Whatsapp
            </Button>
          </Col>
          <Col className="d-flex justify-content-start">
            <ul>
              <ol className="my-2 list">1. Strengthens Bones and Muscles</ol>
              <ol className="my-2 list">2. Helps to Overcome Constipation</ol>
              <ol className="my-2 list">3. Prevents Dehydration</ol>
              <ol className="my-2 list">4. Improves Eye’s Vision</ol>
              <ol className="my-2 list">5. Reduces Mens trual Cramps</ol>
              <ol className="my-2 list">6. Controls Blood Pressure</ol>
              <ol className="my-2 list">
                7. Controls and Prevents the Risk of Cancer
              </ol>
              <ol className="my-2 list">8. Cures Stomach Ulcers</ol>
              <ol className="my-2 list">9. Keeps Your Skin Healthy</ol>
              <ol className="my-2 list">
                10. Benefits as a Hair Conditioner and Promotes
              </ol>
              <ol className="my-2 list">11. Hair Growth </ol>
              <ol className="my-2 list">12. Name Values </ol>
              <ol className="my-2 list">13. Water 89.7g </ol>
              <ol className="my-2 list">14. Energy 35Kcal </ol>
              <ol className="my-2 list">15. Protein 0.88g </ol>
              <ol className="my-2 list">16. Lipid 0.28g </ol>
              <ol className="my-2 list">17. Carbohydrates 8.36g </ol>
              <ol className="my-2 list">18. Dietary Fiber 0.8g </ol>
            </ul>
          </Col>
        </Row>
        <Row className="align-items-flex-start fruits-main justify-content-center my-5">
          <h3 className="d-flex justify-content-center mb-5">
            10 Health benifits of Peanuts
          </h3>
          <Col className="d-flex justify-content-start">
            <ul>
              <ol className="my-2 list">1. Stablise Good/bad Cholesterol</ol>
              <ol className="my-2 list">2. Protects from Heart disease</ol>
              <ol className="my-2 list">3. Contains many amino acids</ol>
              <ol className="my-2 list">4. Good source of protein</ol>
              <ol className="my-2 list">5. Healthy for brain</ol>
              <ol className="my-2 list">6. Fights Free-Radicals</ol>
              <ol className="my-2 list">7. Contains good fat</ol>
              <ol className="my-2 list">8. Rich in Vitamin E</ol>
              <ol className="my-2 list">9. Protects Skin</ol>
              <ol className="my-2 list">10. Rich in fibre</ol>
            </ul>
          </Col>
          <Col
            className="d-flex justify-content-center"
            style={{ flexDirection: "column" }}
          >
            <img src={fruit7} alt="" width="500px" className="mx-auto" />
            <Button className="btn mt-3 product-button d-flex mx-auto">
              Whatsapp
            </Button>
          </Col>
        </Row>
        <Row className="align-items-flex-start fruits-main justify-content-center my-5">
          <h3 className="d-flex justify-content-center mb-5">
            HEALTH BENEFITS OF CORN
          </h3>
          <Col
            className="d-flex justify-content-center"
            style={{ flexDirection: "column" }}
          >
            <img src={fruit8} alt="" width="500px" className="mx-auto" />
            <Button className="btn mt-3 product-button d-flex mx-auto">
              Whatsapp
            </Button>
          </Col>
          <Col className="d-flex justify-content-start">
            <ul>
              <ol className="my-2 list">
                1. Reduces risk of various cardiovascular diseases
              </ol>
              <ol className="my-2 list">
                2. Reduces cholesterol absorption in body
              </ol>
              <ol className="my-2 list">
                3. Rich source of vitamins and minerals
              </ol>
              <ol className="my-2 list">
                4. Helps maintain good vision and skin
              </ol>
              <ol className="my-2 list">
                5. Controls diabetes and hypertension
              </ol>
              <ol className="my-2 list">6. Reduces risk of hemerrhoids</ol>
              <ol className="my-2 list">7. Lower risk of colon cancer</ol>
              <ol className="my-2 list">8. Improves bone strength</ol>
              <ol className="my-2 list">9. Boost immune system</ol>
            </ul>
          </Col>
        </Row>
        <Row className="align-items-flex-start fruits-main justify-content-center my-5">
          <h3 className="d-flex justify-content-center mb-5">
            10 Health Benefits of. Sweet Potato
          </h3>
          <Col className="d-flex justify-content-start">
            <ul>
              <ol className="my-2 list">1. Calming for Stomach</ol>
              <ol className="my-2 list">2. Anti-Inflammatory</ol>
              <ol className="my-2 list">3. Full of Nutrients</ol>
              <ol className="my-2 list">4. Healthy Heart</ol>
              <ol className="my-2 list">5. Boosts Immunity</ol>
              <ol className="my-2 list">6. Rich in Beta-Carotene</ol>
              <ol className="my-2 list">7. Good for Lung Functions</ol>
              <ol className="my-2 list">8. Detoxifying of Heavy Metals</ol>
              <ol className="my-2 list">9. Regulates Blood Sugar Levels</ol>
              <ol className="my-2 list">
                10. Easily Digestible (& Full of Fibre)
              </ol>
            </ul>
          </Col>
          <Col
            className="d-flex justify-content-center"
            style={{ flexDirection: "column" }}
          >
            <img src={fruit9} alt="" width="500px" className="mx-auto" />
            <Button className="btn mt-3 product-button d-flex mx-auto">
              Whatsapp
            </Button>
          </Col>
        </Row>
        <Row className="align-items-flex-start fruits-main justify-content-center my-5">
          <h3 className="d-flex justify-content-center mb-5">
            Health Benefits of Cucumber
          </h3>
          <Col
            className="d-flex justify-content-center"
            style={{ flexDirection: "column" }}
          >
            <img src={fruit10} alt="" width="500px" className="mx-auto" />
            <Button className="btn mt-3 product-button d-flex mx-auto">
              Whatsapp
            </Button>
          </Col>
          <Col className="d-flex justify-content-start">
            <ul>
              <ol className="my-2 list">1. Hydrating - 95% Water</ol>
              <ol className="my-2 list">2. Aids Digestion</ol>
              <ol className="my-2 list">3. Flushes out Toxins</ol>
              <ol className="my-2 list">4. Reduces Cholesterol</ol>
              <ol className="my-2 list">5. Regulates Body Temperature</ol>
              <ol className="my-2 list">6. Promotes Hair Growth</ol>
              <ol className="my-2 list">7. Regulate Blood Alkalinity</ol>
              <ol className="my-2 list">8. Promotes Joint Health</ol>
              <ol className="my-2 list">9. Relieves Sunburns</ol>
              <ol className="my-2 list">10. Soothes Muscle Pain</ol>
              <ol className="my-2 list">11. Heals Diseased Gums</ol>
              <ol className="my-2 list">12. Builds Connective Tissues</ol>
              <ol className="my-2 list">13. Regulate Blood Pressure</ol>
              <ol className="my-2 list">
                14. Rich in Vitamin A, B1, B6, C & D
              </ol>
              <ol className="my-2 list">
                15. Folate,Calcium,magnesium and potassium
              </ol>
            </ul>
          </Col>
        </Row>
        <Row className="align-items-flex-start fruits-main justify-content-center my-5">
          <h3 className="d-flex justify-content-center mb-5">
            Helath Benifits of Sinduri pomegranate
          </h3>
          <Col className="d-flex justify-content-start">
            <ul>
              <ol className="my-2 list">1. Calories: 45</ol>
              <ol className="my-2 list">2. Total fat: 0 grams</ol>
              <ol className="my-2 list">3. Carbs: 11 grams</ol>
              <ol className="my-2 list">4. Protein: 2 grams</ol>
              <ol className="my-2 list">5. Fiber: 2 grams</ol>
              <ol className="my-2 list">6. Vitamin C: 14% of the RDI</ol>
              <ol className="my-2 list">7. Vitamin K: 62% of the RDI</ol>
              <ol className="my-2 list">8. Magnesium: 10% of the RDI</ol>
              <ol className="my-2 list">9. Potassium: 13% of the RDI</ol>
              <ol className="my-2 list">10. Manganese: 12% of the RDI</ol>
            </ul>
          </Col>
          <Col
            className="d-flex justify-content-center"
            style={{ flexDirection: "column" }}
          >
            <img src={fruit11} alt="" width="500px" className="mx-auto" />
            <Button className="btn mt-3 product-button d-flex mx-auto">
              Whatsapp
            </Button>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Fruits;
