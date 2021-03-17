import React from 'react';
import LanguageTag from '../Custom/LanguageTag';
import Avatar from '../Custom/Avatar';
import LanguageBadge from '../Custom/LanguageBadge';
import CommentToolbar from './CommentToolbar';
import avatar from '../../images/avatar.jpg';
import avatar2 from '../../images/avatar2.jpeg';
import avatar3 from '../../images/avatar3.jpg';
import avatar4 from '../../images/avatar4.jpg';
import avatar5 from '../../images/avatar5.png';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const Details = () => {
  const codeString = `import React from 'react';
  import heart from '../../images/heart.svg';
  import comment from '../../images/comment.svg';
  const CommentToolbar = () => {
    return (
      <div className='flex gap-5'>
        <div className='flex'>
          <div>
            <img src={heart} alt='Like button' />
          </div>
          <div>Likes</div>
        </div>
        <div className='flex'>
          <div>
            <img src={comment} alt='Like button' />
          </div>
          <div>Comments</div>
        </div>
      </div>
    );
  };
  
  export default CommentToolbar;`;
  return (
    <div className='details-container wrapper'>
      <section className='details-container__language-tags'>
        <div>
          <LanguageTag language='javascript' />
        </div>
        <div>
          <LanguageTag language='php' />
        </div>
        <div>
          <LanguageTag language='python' />
        </div>
        <div>
          <LanguageTag language='java' />
        </div>
      </section>
      <div class='title-1 mt-3'>dotnet-architecture / eShopOnDapr</div>
      <div className='title-2 mt-2'>
        A sample .NET Core distributed application based on eShopOnContainers,
        powered by Dapr.
      </div>
      <div className='details-container__created mt-4'>
        <div class='flex'>
          <div>Created by</div>
          <div>
            <Avatar avatar={avatar} />
          </div>
        </div>
        <div>Creation date: 6/23/2021</div>
      </div>
      <div className='title-2 mt-4 color-red'>
        anime.js, Bideo.js, Chart.js, Choreographer-js
      </div>
      <div className='details-container__language-Badge mt-4'>
        <LanguageBadge text='Android' />
        <LanguageBadge text='Windows' />
        <LanguageBadge text='Automation' />
        <LanguageBadge text='ios' />
        <LanguageBadge text='appium' />
      </div>
      <section>
        <div className='title-2 mt-5 bolder color-green'>Output</div>
        <p className='mt-2'>
          Automatically exploit low-hanging fruit to pop a root shell. Linux
          privilege escalation made easy!
        </p>
        <p>
          Traitor packages up a bunch of methods to exploit local
          misconfigurations and vulnerabilities (including most of GTFOBins) in
          order to pop a root shell.
        </p>
        <div className='title-2 mt-3 bolder color-green'>Input</div>
        <p className='mt-2'>
          Run with no arguments to find potential
          vulnerabilities/misconfigurations which could allow privilege
          escalation. Add the -p flag if the current user password is known. The
          password will be requested if it's needed to analyse sudo permissions
          etc. fruit to pop a root shell. Linux privilege escalation made easy!
        </p>
      </section>
      <section className='details-container__info'>
        <div>
          <span className='color-red'>language:</span> ruby
        </div>
        <div>
          <span className='color-green'>rvm:</span> 2.4.1
        </div>
        <div>
          <span className='color-green'>before_script:</span> gem install
          awesome_bot
        </div>

        <div>
          <span className='color-green'> script:</span> awesome_bot README.md
          --allow-redirect --allow-dupe --allow 999
        </div>
        <p>
          notifications:
          <br /> email: false
        </p>
      </section>

      <p className='mt-6'>
        If the machine you're attempting privesc on cannot reach GitHub to
        download the binary, and you have no way to upload the binary to the
        machine over SCP/FTP etc., then you can try base64 encoding the binary
        on your machine, and echoing the base64 encoded string to | base64 -d
        /tmp/traitor on the target machine, remembering to chmod +x it once it
        arrives.
      </p>
      <div className='title-2 mt-3 bolder color-green'>Code</div>
      <section className='details-container__info'>
        <SyntaxHighlighter language='javascript' style={docco}>
          {codeString}
        </SyntaxHighlighter>
      </section>
      <section className='details-container__new-comment'>
        <h2 className='header-2 mt-8'>Leave a comment</h2>
        <textarea placeholder='Your comment' />
        <input type='text' placeholder='Your Name' />
        <input type='text' placeholder='Your Email' />
      </section>

      <section className='details-container__comments'>
        <h2 className='header-2 mt-8'>Comments</h2>
        <section className=''>
          <div className='details-container__comment details-container__info rounded'>
            <div>
              <Avatar avatar={avatar2} size='46' />
            </div>
            <div className='details-container__comment-info'>
              <div className='title-3'>Karjo Situbondo</div>
              <div className='color-default'>
                We can confidently assert Files is the platform's best file
                explorer project to bring your innovations to. We focus heavily
                on extensibility and code modularity and have no plans to stop
                doing so. When you contribute to this project, you're helping
                everyone.
              </div>
            </div>
          </div>
          <div className='details-container__comment details-container__info rounded'>
            <div>
              <Avatar avatar={avatar3} size='46' />
            </div>
            <div className='details-container__comment-info'>
              <div className='title-3'>Karjo Situbondo</div>
              <div className='color-default'>
                We can confidently assert Files is the platform's best file
                explorer project to bring your innovations to. We focus heavily
                on extensibility and code modularity and have no plans to stop
                doing so. When you contribute to this project, you're helping
                everyone.
              </div>
            </div>
            <CommentToolbar />
          </div>
          <div className='details-container__comment details-container__info rounded'>
            <div>
              <Avatar avatar={avatar5} size='46' />
            </div>
            <div className='details-container__comment-info'>
              <div className='title-3'>Karjo Situbondo</div>
              <div className='color-default'>
                We can confidently assert Files is the platform's best file
                explorer project to bring your innovations to. We focus heavily
                on extensibility and code modularity and have no plans to stop
                doing so. When you contribute to this project, you're helping
                everyone.
              </div>
              <CommentToolbar />
            </div>
          </div>
          <div className='details-container__comment details-container__info rounded'>
            <div>
              <Avatar avatar={avatar4} size='46' />
            </div>
            <div className='details-container__comment-info'>
              <div className='title-3'>Karjo Situbondo</div>
              <div className='color-default'>
                We can confidently assert Files is the platform's best file
                explorer project to bring your innovations to. We focus heavily
                on extensibility and code modularity and have no plans to stop
                doing so. When you contribute to this project, you're helping
                everyone.
              </div>
              <CommentToolbar />
            </div>
          </div>
        </section>
      </section>
    </div>
  );
};

export default Details;
