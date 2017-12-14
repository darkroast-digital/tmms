<?php include 'snippets/header.php' ?>

<?php include 'snippets/nav.php' ?>
 
	<main id="main" class="main careers-page">

        <header class="page-header">
            <div class="page-header__content">
                <h1>Careers at <span>TMMS</span></h1>
            </div>
        </header>

        <!-- End Page Header -->

        <section class="careers-intro">
            <h3>Looking To Join Our Team?</h3>
            <hr class="seperator">
            <p>Looking for an exciting, fast-paced and rewarding career? TMMS is always looking for energetic and talented individuals to join our team. In an industry as diverse as ours there are plenty of  of opportunities for anyone looking to start or develop their career in Tool and Mold. Currently we are accepting resumes for the following Positions</p>
            <p><strong>Program Managers | CNC Operators  |  General Labourers | CAD / CAM Designer</strong></p>
            <p>If you're interested, send us your resume and a brief message bellow. If there are currently no available positions that you think would be a good fit, we encourage you to send in your resume anyways.</p>
        </section>

        <section class="careers-mailer">
            <div class="form-messages"></div>
            <form action="careers-mailer.php" method="post" id="careers-form" class="careers-form" enctype="multipart/form-data">
                <div class="form__fields">
                    <div class="form-row">
                        <input type="text" id="name" name="name" required placeholder="Name">
                        <input type="tel" id="phone" name="phone" required placeholder="Phone">
                        <input type="email" id="email" name="email" required placeholder="Email">
                    </div>

                    <div class="form-row">
                        <textarea name="message" id="message" required placeholder="Message"></textarea>
                        <input id="file" name="file" type="file" />
                    </div>
                </div>

    <button type="submit" class="submit">Send Message</button>
            </form>
        </section>

        <!-- End Capabilities Info -->

        <div class="hp__cta">
            <div class="hp__cta-content">
                <div>
                    <h5>World Class <span>Management</span></h5>
                    <p>We provide world class program management systems that exceed our customers expectations. Learn about or process</p>
                </div>
                <a href="contact" class="button">Contact Us</a>
            </div>
        </div>

	</main>

<?php include 'snippets/footer.php' ?>
