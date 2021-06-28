import React from 'react';
import './Flexbox.css';

function Flexbox() {
    return (
        <div className="container">
            <h2>Float</h2>
            <div className="float">
                <main>
                    <img
                        src="https://www.codeproject.com/KB/GDI-plus/ImageProcessing2/img.jpg"
                        alt="imageas"
                    />
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit nesciunt
                    suscipit sit eaque? Hic, veritatis.
                </main>
                <section>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, aut. Lorem
                    ipsum dolor sit amet, consectetur adipisicing elit. Id cumque dolorum
                    consequatur. Dolorum sint enim fugit doloribus corporis, assumenda veniam
                    blanditiis dolor vitae optio non voluptates distinctio odio alias eligendi!
                </section>
                <section>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed, quos.
                </section>
            </div>

            <div className="flexbox">
                <h2>Flexbox</h2>

                <main>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus accusamus
                    labore vel voluptate corporis ipsam!
                </main>
                <section>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore voluptatibus,
                    harum nisi dolorem est a. Lorem ipsum dolor sit amet consectetur adipisicing
                    elit. Itaque adipisci esse quos rem quibusdam voluptatum.
                </section>
                <section>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. A nesciunt aliquam
                    omnis placeat provident deleniti.
                </section>
            </div>
        </div>
    );
}

export default Flexbox;
