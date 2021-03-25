import React, { useState } from 'react';
import PageHeader from '../PageHeader/PageHeader';
import {
  AccordionMenu,
  AccordionMenuItem,
} from '../Custom/AccordionMenu/AccordionMenu';

const Careers = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(() => {
    return [false, false, false, false];
  });
  const statusChanged = (index) => {
    isMenuOpen[index] = !Boolean(isMenuOpen[index]);
    setIsMenuOpen([...isMenuOpen]);
  };

  return (
    <div className='career'>
      <PageHeader text='Careers' />
      <section className='wrapper  carrer__accordion-menu mt-14'>
        <AccordionMenu>
          <AccordionMenuItem
            header='Art Director'
            isWithButton={true}
            isOpen={isMenuOpen[0]}
            index={0}
            statusChanged={statusChanged}
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
          <AccordionMenuItem
            header='Front End Developer'
            isWithButton={true}
            isOpen={isMenuOpen[1]}
            index={1}
            statusChanged={statusChanged}
          >
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias
            quidem itaque, aliquid quae expedita nisi dolore corporis veritatis
            perferendis adipisci sit vitae fuga laborum ad delectus quas tenetur
            soluta officiis!
          </AccordionMenuItem>

          <AccordionMenuItem
            header='Interactive Developer'
            isWithButton={true}
            isOpen={isMenuOpen[2]}
            index={2}
            statusChanged={statusChanged}
          >
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias
            quidem itaque, aliquid quae expedita nisi dolore corporis veritatis
            perferendis adipisci sit vitae fuga laborum ad delectus quas tenetur
            soluta officiis!
          </AccordionMenuItem>
          <AccordionMenuItem
            header='App Designer'
            isWithButton={true}
            isOpen={isMenuOpen[3]}
            index={3}
            statusChanged={statusChanged}
          >
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias
            quidem itaque, aliquid quae expedita nisi dolore corporis veritatis
            perferendis adipisci sit vitae fuga laborum ad delectus quas tenetur
            soluta officiis!
          </AccordionMenuItem>
          <AccordionMenuItem
            header='Lead Product Designer, Design Systems'
            isWithButton={true}
            isOpen={isMenuOpen[4]}
            index={4}
            statusChanged={statusChanged}
          >
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
