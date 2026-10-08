import re

with open("index.html", "r") as f:
    content = f.read()

start_tag = '<div class="project-gallery__track">'
end_tag = '</div>\n        </div>\n      </div>\n    </section>\n\n    <section class="section section--paper faq"'

replacement = """<div class="project-gallery__track">
            <figure class="project-gallery__slide">
              <img src="assets/img/project-mightyline-01.jpg"
                alt="Green MightyLine tape walkway with a red edge line and pedestrian traffic floor sign" width="1200"
                height="1600" loading="lazy" decoding="async">
              <figcaption><span class="mono">Solution used</span><strong><a
                    href="https://cotewell.com.au/product/mighty-line-marking-tape/">MightyLine Marking Tape <span
                      aria-hidden="true">→</span></a></strong></figcaption>
            </figure>
            <figure class="project-gallery__slide">
              <img src="assets/img/Signum Projected Crossing & Stop Sign.jpg"
                alt="Projected green pedestrian crossing and stop sign on a warehouse floor" width="1441" height="2560"
                loading="lazy" decoding="async">
              <figcaption><span class="mono">Solution used</span><strong><a
                    href="https://cotewell.com.au/product-category/line-marking-projector/">Projected Marking <span
                      aria-hidden="true">→</span></a></strong></figcaption>
            </figure>
            <figure class="project-gallery__slide">
              <img src="assets/img/Painted Line Marking.jpg"
                alt="Line marking machine applying yellow paint at a Queensland food manufacturing site" width="900"
                height="1600" loading="lazy" decoding="async">
              <figcaption><span class="mono">Solution used</span><strong><a
                    href="https://cotewell.com.au/pros-cons-of-single-pack-line-marking-paint">Single-pack Paint <span
                      aria-hidden="true">→</span></a></strong></figcaption>
            </figure>
            <figure class="project-gallery__slide">
              <img src="assets/img/Epoxy Line Marking.jpg"
                alt="Yellow walkway and footprint markings in a Victorian food processing warehouse" width="1080"
                height="1439" loading="lazy" decoding="async">
              <figcaption><span class="mono">Solution used</span><strong><a
                    href="https://cotewell.com.au/pros-cons-of-our-2-pack-epoxy-line-marking/">Two-pack Epoxy <span
                      aria-hidden="true">→</span></a></strong></figcaption>
            </figure>
            <figure class="project-gallery__slide">
              <img src="assets/img/CAP.jpg"
                alt="Yellow hatching and symbols marking an external industrial area in Victoria" width="1080"
                height="1439" loading="lazy" decoding="async">
              <figcaption><span class="mono">Solution used</span><strong><a
                    href="https://cotewell.com.au/sick-of-repainting-your-lines-every-6-months-so-was-this-customer/">Cold Applied Plastic <span
                      aria-hidden="true">→</span></a></strong></figcaption>
            </figure>
          </div>
        </div>
      </div>
    </section>

    <section class="section section--paper faq" """

idx1 = content.find(start_tag)
idx2 = content.find(end_tag) + len(end_tag) - len('    <section class="section section--paper faq" ') # offset to get it right

if idx1 != -1 and idx2 != -1:
    new_content = content[:idx1] + replacement + content[idx2:]
    with open("index.html", "w") as f:
        f.write(new_content)
    print("Replaced successfully")
else:
    print("Not found")
