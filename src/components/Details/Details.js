import React, { useState, useEffect } from 'react';
import moment from 'moment';
import LanguageTag from '../Custom/LanguageTag';
import LanguageBadge from '../Custom/LanguageBadge';
import Comment from './Comment';
import Avatar from '../Custom/Avatar';
import avatar from '../../images/avatar.jpg';
import avatar2 from '../../images/avatar2.jpg';
import avatar3 from '../../images/avatar3.jpg';
import avatar4 from '../../images/avatar4.jpg';
import avatar5 from '../../images/avatar5.png';
import votes from '../../images/votes.svg';
import votesSmall from '../../images/votes_small.svg';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const avatars = [avatar, avatar2, avatar3, avatar4, avatar5];
const tempDetails = {
  'language': ['Javascript', 'Java', 'Php', 'Python'],
  'creator': 'test',
  'date': 1612619142000,
  'keywords': ['key word 1', 'key word 2', 'key word 3', 'key word 4'],
  'dependencies': ['dependecy 1', 'dependecy 2', 'dependecy 3', 'dependecy 4'],
  'input': 'tes input',
  'output': 'test output',
  'title': 'title test',
  'description': 'description example',
  'source_code': `int main() {\r\n\tprintf("Hello World\\n");\r\n\treturn 0;\r\n}\r\n`,
  'likes': { 'number': 0, 'users': [] },
  'valuation': 234,
  'dislikes': { 'number': 0, 'users': [] },
  'comments': [
    {
      'date': 395567765444,
      'creator': 'Bill Gates',
      'valuation': 210,
      'dislikes': {
        'number': 0,
        'users': [],
      },
      'title': 'Microsoft FTW',
      'likes': {
        'number': 0,
        'users': [],
      },
    },
    {
      'date': 795567765444,
      'creator': 'Mark zukrberg',
      'valuation': 1,
      'dislikes': {
        'number': 0,
        'users': [],
      },
      'title': 'I am a robot.',
      'likes': {
        'number': 0,
        'users': [],
      },
    },
    {
      'date': 895567765444,
      'creator': 'Elon musk',
      'valuation': 123,
      'dislikes': {
        'number': 0,
        'users': [],
      },
      'title': 'Space invaders',
      'likes': {
        'number': 0,
        'users': [],
      },
    },
    {
      'date': 1895567765444,
      'creator': 'Niels bohr',
      'valuation': 26,
      'dislikes': {
        'number': 0,
        'users': [],
      },
      'title': 'quantum leap is real!',
      'likes': {
        'number': 0,
        'users': [],
      },
    },
  ],
};
const Details = () => {
  const [details, setDetails] = useState(null);
  useEffect(() => {
    const getDetails = async () => {
      // const { data } = await api.get('get_language_menu');
      setDetails(tempDetails);
    };

    getDetails();
  }, []);

  const renderDetails = () => {
    const {
      title,
      description,
      input,
      output,
      source_code,
      dependencies,
      keywords,
      valuation,
      comments,
    } = details;

    return (
      <div className='details-container wrapper'>
        <div className='details-container__votes'>
          <div className='flex mb-3 j-center'>
            <img src={votesSmall} alt='votes small' />
            <span>{valuation} votes</span>
          </div>
          <button className='button flex'>
            <img src={votes} alt='votes' /> Vote
          </button>
        </div>
        <section className='details-container__language-tags'>
          {details.language.map((l) => {
            return <LanguageTag key={l} language={l} />;
          })}
        </section>
        <div class='title-1 mt-3'>{title}</div>
        <div className='title-2 mt-2'>{description}</div>
        <div className='details-container__created mt-4'>
          <div class='flex align-items-center gap-1'>
            <div>Created by</div>
            <div>
              <Avatar avatar={avatar} />
            </div>
          </div>
          <div>
            Creation date:&nbsp;
            {moment('1454521239279', 'x').format('DD-MM-YY HH:mm:ss')}
          </div>
        </div>
        <div className='title-2 mt-4 color-red'>
          {dependencies.map((l, index) => {
            return `${l} `;
          })}
        </div>
        <div className='details-container__language-Badge mt-4'>
          {keywords.map((l) => {
            return <LanguageBadge key={l} text={l} />;
          })}
        </div>
        <section>
          <div className='title-2 mt-5 bolder color-green'>Output</div>
          <p className='mt-2'>{output}</p>

          <div className='title-2 mt-3 bolder color-green'>Input</div>
          <p className='mt-2'>{input}</p>
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
            {source_code}
          </SyntaxHighlighter>
        </section>
        <section className='details-container__new-comment'>
          <h2 className='header-2 mt-8'>Leave a comment</h2>
          <textarea placeholder='Your comment' />
        </section>

        <section className='details-container__comments'>
          <h2 className='header-2 mt-8'>Comments</h2>
          <section className=''>
            {comments.map((comment, index) => {
              return <Comment avatar={avatars[index]} comment={comment} />;
            })}
          </section>
        </section>
      </div>
    );
  };

  return details ? renderDetails() : <div>Loading...</div>;
};

export default Details;
