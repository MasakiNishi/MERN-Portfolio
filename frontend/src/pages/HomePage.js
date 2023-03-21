function HomePage() {
    return (
      <>
        <header className="bg-image">
            <span className="page-title">
                <h2>About this portfolio</h2>
            </span>
            <span className="bg"></span>
        </header>
        <p>This is a MERN portfolio created to study a series of web developments using the MERN stack.</p>
        <article>
            <h3>What is the MERN stack?</h3>
            <p>A software handle using MongoDB, Express, React, and Node.js, used for web app development.</p>
        </article>
        <article>
            <h3>About the technology used in this portfolio</h3>
            <p>Specifically, the following technologies are used.</p>
            <ul>
                <li><a href="#html">HTML</a></li>
                <li><a href="#css">CSS</a></li>
                <li><a href="#javascript">JavaScript</a></li>
                <li><a href="#react">React</a></li>
                <li><a href="#node">Node.js</a></li>
                <li><a href="#express">Express</a></li>
                <li><a href="#mongo">MongoDB</a></li>
                <li><a href="#rest">REST</a></li>
            </ul>
            <h4 id="html">HTML</h4>
                <p>HTML stands for HyperText Markup Language. It is a standard markup language for web page creation. It allows the creation and structure of sections, paragraphs, and links using HTML elements (the building blocks of a web page) such as tags and attributes. </p>
            <h4 id="css">CSS</h4>
                <p>Cascading Style Sheets (CSS) is a style sheet language used for describing the presentation of a document written in a markup language such as HTML. CSS is a cornerstone technology of the World Wide Web, alongside HTML and JavaScript.</p>
                <p>This portfolio is styled by importing fonts from <a href="https://fonts.google.com/">Google Fonts</a>.</p>
                <p>In addition, all images used in the background, etc., are compressed to reduce loading time.</p>
            <h4 id="javascript">JavaScript</h4>
                <p>JavaScript is a scripting or programming language that allows you to implement complex features on web pages — every time a web page does more than just sit there and display static information for you to look at — displaying timely content updates, interactive maps, animated 2D/3D graphics, scrolling video jukeboxes, etc.</p>
            <h4 id="react">React</h4>
                <p>The React.js framework is an open-source JavaScript framework and library developed by Facebook. It's used for building interactive user interfaces and web applications quickly and efficiently with significantly less code than you would with vanilla JavaScript.</p>
                <p>This portfolio uses <a href="https://react-icons.github.io/react-icons/">react-icons</a>, and interactive user interfaces can be used by clicking on the icon.</p>
            <h4 id="node">Node.js</h4>
                <p>Node.js is an open-source, cross-platform JavaScript runtime environment and library for running web applications outside the client's browser. Developers use Node.js to create server-side web applications, and it is perfect for data-intensive applications since it uses an asynchronous, event-driven model.</p>
            <h4 id="express">Express</h4>
                <p>Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.</p>
            <h4 id="mongo">MongoDB</h4>
                <p>MongoDB is an open source NoSQL database management program. NoSQL (Not only SQL) is used as an alternative to traditional relational databases. NoSQL databases are quite useful for working with large sets of distributed data. MongoDB is a tool that can manage document-oriented information, store or retrieve information.</p>
                <p>This portfolio uses Mongoose for connection to mongodb. Mongoose is an Object Data Modeling (ODM) library for MongoDB and Node.js. It manages relationships between data, provides schema validation, and is used to translate between objects in code and the representation of those objects in MongoDB.</p>
            <h4 id="rest">REST</h4>
                <p>A REST API (also known as RESTful API) is an application programming interface (API or web API) that conforms to the constraints of REST architectural style and allows for interaction with RESTful web services. REST stands for representational state transfer and was created by computer scientist Roy Fielding. Roy Fielding first presented it in 2000 in his famous <a href="https://www.ics.uci.edu/~fielding/pubs/dissertation/rest_arch_style.htm">dissertation</a>.</p>
                <p>This portfolio is also REST compliant.</p>
        </article>
      </>
    );
}

export default HomePage;
