import Diabetes from "@/components/Diabetes";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const About = () => {
  return (
    <>
      <Navbar />
      
      <section id="about">
        <div className="container-lg">
          <div className="row justify-content-center align-items-center">
            <h1>About</h1>
            <p>
              The Female Diabetes Predictor website is a web application
              developed as a final semester project for the Machine Learning and
              Web Services module of GDSE in IJSE. The objective of the project
              is to provide a predictive model for assessing the risk of
              diabetes in females based on various input parameters. The website
              comprises two main components: the back-end and the front-end.
            </p>

            <ul>
              <li>
                <strong>Back-end:</strong>
                <dl>
                  The back-end of the website is built using Flask, a Python web
                  framework. It is hosted on an AWS EC2 instance, which offers
                  reliable and scalable compute resources in the cloud. The
                  back-end receives input data from the front-end, typically
                  through HTTP requests. The data includes parameters such as
                  age, BMI (Body Mass Index), blood pressure, insulin levels,
                  and other relevant features. This data is then processed and
                  passed through a machine learning model. The machine learning
                  model used in the back-end is trained on a dataset containing
                  historical data related to diabetes in females. The model
                  applies appropriate algorithms to analyze the input data and
                  generate a prediction regarding the likelihood of diabetes.
                  Once the prediction is obtained, the back-end sends the result
                  back to the front-end as a response to the initial request.
                  This prediction can be in the form of a binary classification
                  (e.g., high risk or low risk) or a numerical value
                  representing the probability of having diabetes.
                </dl>
              </li>
              <li>
                <strong>Front-end:</strong>
                <dl>
                  The front-end of the website is developed using Next.js, a
                  React-based framework for server-rendered React applications.
                  Bootstrap, a popular CSS framework, is utilized for styling
                  and responsive design. The front-end is hosted on Hostinger, a
                  web hosting service. Users access the website through their
                  web browsers, interacting with the intuitive user interface
                  presented by the front-end. They enter their personal
                  information and health parameters into the input form. The
                  front-end then sends this data to the back-end for processing
                  and prediction. The prediction result received from the
                  back-end is displayed to the user, providing an assessment of
                  their diabetes risk based on the input provided. The front-end
                  ensures an engaging and user-friendly experience, making it
                  easy for individuals to understand and interpret the
                  prediction.
                </dl>
              </li>
            </ul>

            <p>
              By integrating a machine learning model into the back-end and
              presenting the prediction through the front-end, the Female
              Diabetes Predictor website empowers users to gain insights into
              their potential diabetes risk. This project showcases the fusion
              of machine learning concepts, web development technologies, and
              cloud hosting services to create an impactful application aimed at
              assisting individuals in assessing their health condition.
            </p>
            <div className="mt-3">
              <strong>Vimukthi Bandaragoda</strong>
              <br />
              <strong>GDSE 54</strong>
              <br />
              <strong>2019/G/1037</strong>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default About;
