import React from 'react';
import PageHeader from '../PageHeader/PageHeader';
import {
  AccordionMenu,
  AccordionMenuItem,
} from '../Custom/AccordionMenu/AccordionMenu';

const Careers = () => {
  return (
    <div className='career'>
      <PageHeader text='Careers' />
      <section className='wrapper  carrer__accordion-menu mt-14'>
        <AccordionMenu>
          <AccordionMenuItem
            header='Art Director'
            isOpen={true}
            isWithButton={true}
          >
            The Senior Product Designer will play a key role in every part of
            the design process, from research to conception, to UI/UX, to
            validation. In this role, you will report directly to our Product
            Design Lead and collaborate daily with our Product Manager to mockup
            new and upcoming features for the EBlock application.
            <h3 className='career__header'>Core Competencies</h3>
            <ul className='career__list'>
              <li>Creative Thinking</li>
              <li>Communication skills</li>
              <li>Team Player</li>
              <li>Time Management</li>
              <li>Planning and Organizing</li>
              <li>Problem Solving</li>
              <li>Customer service</li>
              <li>Interpersonal Skills</li>
            </ul>
            <h3 className='career__header'>What you will be doing</h3>
            <ul className='career__list'>
              <li>
                Demonstrate leadership by acting as design owner within the
                Design team through the conception, build, and release of app
                features
              </li>
              <li>
                Hold the product output to a high standard, envisioning multiple
                alternative patterns to solve a single design problem, sweating
                the details, and iterating on feedback
              </li>
              <li>
                Produces compelling data-informed designs to illustrate concepts
                iteratively through sketches, site maps, conceptual diagrams,
                presentation design, user flows, wireframes, and high-fidelity
                mock-ups and prototypes.
              </li>
              <li>
                Provide a high degree of attention to detail and an eye toward
                keeping up with and experimenting with new visual design trends.
              </li>
            </ul>
            <h3 className='career__header'>What we would like to see</h3>
            <ul className='career__list'>
              <li>
                Demonstrate leadership by acting as design owner within the
                Design team through the conception, build, and release of app
                features
              </li>
              <li>
                Hold the product output to a high standard, envisioning multiple
                alternative patterns to solve a single design problem, sweating
                the details, and iterating on feedback
              </li>
              <li>
                Produces compelling data-informed designs to illustrate concepts
                iteratively through sketches, site maps, conceptual diagrams,
                presentation design, user flows, wireframes, and high-fidelity
                mock-ups and prototypes.
              </li>
              <li>
                Provide a high degree of attention to detail and an eye toward
                keeping up with and experimenting with new visual design trends.
              </li>
            </ul>
          </AccordionMenuItem>
          <AccordionMenuItem header='Front End Developer' isWithButton={true}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias
            quidem itaque, aliquid quae expedita nisi dolore corporis veritatis
            perferendis adipisci sit vitae fuga laborum ad delectus quas tenetur
            soluta officiis!
          </AccordionMenuItem>
          <AccordionMenuItem header='Interactive Developer'>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias
            quidem itaque, aliquid quae expedita nisi dolore corporis veritatis
            perferendis adipisci sit vitae fuga laborum ad delectus quas tenetur
            soluta officiis!
          </AccordionMenuItem>
          <AccordionMenuItem header='App Designer' isWithButton={true}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias
            quidem itaque, aliquid quae expedita nisi dolore corporis veritatis
            perferendis adipisci sit vitae fuga laborum ad delectus quas tenetur
            soluta officiis!
          </AccordionMenuItem>
          <AccordionMenuItem header='Lead Product Designer, Design Systems'>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias
            quidem itaque, aliquid quae expedita nisi dolore corporis veritatis
            perferendis adipisci sit vitae fuga laborum ad delectus quas tenetur
            soluta officiis!
          </AccordionMenuItem>
        </AccordionMenu>
      </section>
    </div>
  );
};

// • Creative Thinking
// • Communication skills
// • Team Player
// • Time Management
// • Planning and Organizing
// • Problem Solving
// • Customer service
// • Interpersonal Skills

export default Careers;
