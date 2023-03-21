import React from 'react';

function TopicsPage() {
    return (
        <>
            <h2 className="subpage">Web Development Concepts</h2>
            <nav id="content-navigation">
                <a href="#server">{'>'} About Web Servers</a>
                <a href="#design">{'>'} Frontend Design</a>
                <a href="#image">{'>'} Optimizing Images</a>
                <a href="#style">{'>'} Cascading Styleseets</a>
            </nav>
            <article id="server">
                <h3>About Web Servers</h3>
                <p>I created folders and pages on the VS Code terminal using the <strong>mkdir</strong> and <strong>touch</strong> commands. 
                    I also used <strong>boilerplate keystroke</strong> to create index.html file.
                    I typed <strong>"! + tab"</strong> to output the HTML template, and changed the <strong>title</strong> and <strong>h</strong> tags. Also added <strong>p</strong> tags as needed.
                    The web server recognizes the index.html file as the <strong>default html file</strong>.
                    In other words, it is usually used as the <strong>home page</strong> of a website. 
                    However, the default file path of the home page can be changed depending on the web server configuration.
                </p>
                <p>The status of index.html is <strong>200</strong>, and <strong>OK</strong> is returned. However, main.css and main.js are <strong>(Failed) net::ERR_FILE_NOT_FOUND</strong> because the files are not yet present.</p>
                <p>
                    The protocol of index.html changed to <strong>HTTPS</strong> protocol from <strong>FILE</strong> protocol. Also, with the protocol change, 
                    <strong>remote addresses</strong> and more <strong>Request Headers</strong>, and <strong>Response Headers</strong> have been added.
                </p>
                <p>
                    The status of favicon.ico is <strong>200</strong> because the browser calls favicon.ico in the <strong>root directory</strong> by default, 
                    and the web.engr.oregonstate.edu administrator has <strong>already uploaded</strong> favicon.ico under the root directory. 
                    However, Calling the main.css and main.js files is impossible because they are located under <strong>my user directory</strong>, and I have <strong>not uploaded</strong> them yet.
                </p>
                <p>The schema is <strong>https</strong>, the subdomain is <strong>web.engr</strong>, the host domain is <strong>oregonstate.edu</strong>, and the resource is <strong>/~nishim/a1-nishim/index.html</strong>.</p>
            </article>
            <article id="design">
                <h3>Frontend Design</h3>
                <p>
                    <strong>Front-end design</strong> is one of the most important elements because it greatly affects the <strong>usability of websites</strong> and <strong>customer satisfaction</strong>. 
                    It includes the <strong>visual design</strong> of the page, the <strong>graphical user interface (GUI)</strong>, and the <strong>interactive experience</strong> so that users can use it <strong>comfortably</strong>. 
                    The visual design combines elements such as <strong>color</strong>, <strong>fonts</strong>, <strong>media</strong>, <strong>illustrations</strong> and <strong>icons</strong> to convey information to the viewer.
                    That gives users the <strong>targeted impression</strong> through <strong>visual expression</strong>. 
                    GUI includes <strong>information design</strong>, such as how to arrange and display the information users seek, and <strong>optimization of appearance and operability</strong>, which includes <strong>navigation</strong>.
                </p>
                <dl>
                    <dt><strong>Effective</strong></dt>
                        <dd>Can it accurately solve the problems that website users have?</dd>
                    <dt><strong>Efficient</strong></dt>
                        <dd>Can it solve the problems that users have with a minimal amount of work?</dd>
                    <dt><strong>Easy to navigate</strong></dt>
                        <dd>Can users understand the process of solving a problem with a single glance?</dd>
                    <dt><strong>Error-free</strong></dt>
                        <dd>Are there frequent errors faced by users? Are there any barriers to users solving problems?</dd>
                    <dt><strong>Enjoyable to use, or engaging</strong></dt>
                        <dd>Did the website experience satisfy the users? Would users want to use the website again based on the above four 'E' experiences?</dd>
                </dl>
                <p>
                    Page Layout Tags help <strong>search engine crawlers</strong> understand the <strong>structure</strong> of a website. 
                    Using the appropriate Page Layout Tags will provide <strong>search engine optimization</strong> and a <strong>structure</strong> that is easy for <strong>developers</strong> to understand.
                </p>
                <dl>
                    <dt><strong>&lt;header&gt;</strong></dt>
                        <dd>It is often used to describe headings, summaries, and navigation links that begin a document or section.</dd>
                    <dt><strong>&lt;nav&gt;</strong></dt>
                        <dd>
                            The nav element represents the main navigation section within a document.
                                The primary navigation section can be a section commonly used within a website called global navigation,
                                a link block such as the list of categories in the side menu of a blog, or a link block to navigate to a section within a document, etc.
                            
                        </dd>
                    <dt><strong>&lt;main&gt;</strong></dt>
                        <dd>
                            The main element represents the main content within a document. Main content refers to the main content within the document,
                                excluding headers, navigation, search forms, footer information, etc., which are repeated on every page within a website.
                            
                        </dd>
                    <dt><strong>&lt;section&gt;</strong></dt>
                        <dd>The section element represents a general section of a document or application. In this context, a section is a group of content representing a subject matter.</dd>
                    <dt><strong>&lt;article&gt;</strong></dt>
                        <dd>The article element represents an independent article section within a document. Each article and accompanying comment on a news site or blog can be considered a separate article section.</dd>
                    <dt><strong>&lt;aside&gt;, &lt;figure&gt;, &lt;blockquote&gt;</strong></dt>
                        <dd>
                            The <strong>aside</strong> element represents a section that contains supplemental information, footnotes, explanations of terms, or other content that should be mentioned separately from the main content, or content that can be separated from the main content without causing problems.
                            The <strong>figure</strong> element represents a grouping of pictures, illustrations, charts, code, etc. The grouping by the figure element must stand on its own.
                            The <strong>blockquote</strong> element represents a paragraph-by-paragraph citation. The content is quoted from another resource. Use the <strong>q</strong> element for word-for-word quotations.
                        </dd>
                    <dt><strong>&lt;footer&gt;</strong></dt>
                        <dd>The footer element represents the footer of a document or section. It is often used to describe author information or links to related articles.</dd>
                    <dt><strong>&lt;div&gt;</strong></dt>
                        <dd>The div element organizes flow content. div element itself has no special meaning, but it can be used to give meaning to the flow content it contains by adding class attribute, lang attribute, title attribute, etc.</dd>
                </dl>
                <p>
                    It uses <strong>&lt;a&gt;</strong> tags and specifies <strong>absolute</strong> or <strong>relative</strong> URLs in the <strong>href</strong> attribute. 
                    The <strong>nav</strong> element is a <strong>section</strong> with navigation links and can combine multiple &lt;a&gt; elements into one section.
                </p>
            </article>
            <article id="image">
                <h3>Optimizing Images</h3>
                <p>
                    Extensions such as <strong>JPG</strong>, <strong>PNG</strong>, <strong>WebP</strong>, <strong>GIF</strong>, <strong>SVG</strong>, and <strong>ICO</strong> are mainly used for images. 
                    It is used for photos with a large number of colors and vivid colors, such as background photos.
                    The main difference between PNG and JPG is that PNG is lossless and allows for background transparency. PNGs are often used when repeated processing or background transparency is required.
                    WebP is becoming mainstream because of its ability to reduce image size and increase display speed.
                    GIF can display animations as well as images with a small number of colors.
                    SVG and ICO are mainly used for icon images.
                </p>
                <p>
                    Photos usually use the <strong>JPG</strong> extension due to the variety of colors required.
                    Line art, such as logos and icons, usually use <strong>GIF</strong>, sometimes <strong>8-bit PNG</strong>, and <strong>ICO</strong> extensions.
                </p>
            </article>
            <article id="style">
                <h3>Cascading Stylesheets</h3>
                <p>Some designs, such as tables, are not user-friendly because HTML alone is very simple. To make the website user-friendly, stylesheets are used and a graphical design is applied.</p>
                <p>
                    To apply CSS, it can load a CSS file using the <strong>&lt;link&gt;</strong> tag in HTML, style it directly with a <strong>&lt;style&gt;</strong> tag, 
                    style in the <strong>attribute</strong> or <strong>value</strong> of the tag to which you want to apply CSS, 
                    apply CSS using <strong>JavaScript</strong> with manipulating the <strong>DOM</strong>, or style in <strong>JavaScript template literals</strong> within a JavaScript function.
                </p>
            </article>
        </>
    );
}

export default TopicsPage;
