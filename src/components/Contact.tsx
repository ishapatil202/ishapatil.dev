// import React, { useState } from 'react';
// import emailjs from '@emailjs/browser';
// import { Box, Button, TextField } from '@mui/material';
// import SendIcon from '@mui/icons-material/Send';

// function Contact() {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [message, setMessage] = useState('');

//   const [nameError, setNameError] = useState(false);
//   const [emailError, setEmailError] = useState(false);
//   const [messageError, setMessageError] = useState(false);

//   const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();

//     setNameError(name.trim() === '');
//     setEmailError(email.trim() === '');
//     setMessageError(message.trim() === '');

//     if (name && email && message) {
//       const templateParams = {
//         name: name,
//         email: email,
//         message: message,
//       };

//       emailjs
//         .send('service_66r6mkd', 'template_7ltyghj', templateParams, 'aAtRZJNERh5L75u4h')
//         .then((response) => {
//           console.log('SUCCESS!', response.status, response.text);
//           alert('Message sent successfully!');
//         })
//         .catch((error) => {
//           console.log('FAILED...', error);
//           alert('Failed to send message, please try again.');
//         });

//       setName('');
//       setEmail('');
//       setMessage('');
//     }
//   };

//   return (
//     <div id="contact" style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
//       <h1>Contact</h1>
//       <p>Get in Touch!</p>
//       <Box
//         component="form"
//         onSubmit={sendEmail}
//         noValidate
//         autoComplete="off"
//         sx={{ display: 'flex', flexDirection: 'column', gap: 2, maxWidth: '1000px', margin: '0 auto', padding: '2rem', }}
//       >
//         <TextField
//           required
//           label="Your Name"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//           error={nameError}
//           helperText={nameError ? 'Please enter your name' : ''}
//           InputProps={{
//             style: { color: 'white' }
//           }}
//           InputLabelProps={{
//             style: { color: 'white' }
//           }}
//           fullWidth
//         />
//         <TextField
//           required
//           label="Email / Phone"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           error={emailError}
//           helperText={emailError ? 'Please enter your email or phone' : ''}
//           InputProps={{
//             style: { color: 'white' }
//           }}
//           InputLabelProps={{
//             style: { color: 'white' }
//           }}
//           fullWidth
//         />
//         <TextField
//           required
//           label="Message"
//           multiline
//           minRows={5}
//           value={message}
//           onChange={(e) => setMessage(e.target.value)}
//           error={messageError}
//           helperText={messageError ? 'Please enter your message' : ''}
//           InputProps={{
//             style: { color: 'white' }
//           }}
//           InputLabelProps={{
//             style: { color: 'white' }
//           }}
//           fullWidth
//         />
//         <Button variant="contained" endIcon={<SendIcon />} type="submit" sx={{ alignSelf: 'flex-end', mt: 2 }}>
//           Send
//         </Button>
//       </Box>
//     </div>
//   );
// }

// export default Contact;


import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { Box, Button, TextField } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [messageError, setMessageError] = useState(false);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setNameError(name.trim() === '');
    setEmailError(email.trim() === '');
    setMessageError(message.trim() === '');

    if (name && email && message) {
      const templateParams = {
        name: name,
        email: email,
        message: message,
      };

      emailjs
        .send('service_66r6mkd', 'template_7ltyghj', templateParams, 'aAtRZJNERh5L75u4h')
        .then((response) => {
          console.log('SUCCESS!', response.status, response.text);
          alert('Message sent successfully!');
        })
        .catch((error) => {
          console.log('FAILED...', error);
          alert('Failed to send message, please try again.');
        });

      setName('');
      setEmail('');
      setMessage('');
    }
  };

  return (
    <div id="contact" style={{ padding: '4rem 2rem', backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
      {/* Centered Container */}
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <h1 style={{ marginBottom: '0.5rem', color: 'white' }}>Contact</h1>
        <p style={{ marginBottom: '2rem', color: 'white' }}>Get in Touch!</p>

        <Box
          component="form"
          onSubmit={sendEmail}
          noValidate
          autoComplete="off"
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
          }}
        >
          {/* Name and Email side-by-side */}
          <Box sx={{ display: 'flex', gap: 2 }}>
            <TextField
              required
              label="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              error={nameError}
              helperText={nameError ? 'Please enter your name' : ''}
              InputProps={{ style: { color: 'white' } }}
              InputLabelProps={{ style: { color: 'white' } }}
              fullWidth
            />
            <TextField
              required
              label="Email / Phone"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              error={emailError}
              helperText={emailError ? 'Please enter your email or phone' : ''}
              InputProps={{ style: { color: 'white' } }}
              InputLabelProps={{ style: { color: 'white' } }}
              fullWidth
            />
          </Box>

          {/* Message full width */}
          <TextField
            required
            label="Message"
            multiline
            minRows={5}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            error={messageError}
            helperText={messageError ? 'Please enter your message' : ''}
            InputProps={{ style: { color: 'white' } }}
            InputLabelProps={{ style: { color: 'white' } }}
            fullWidth
          />

          {/* Send Button */}
          <Button
            variant="contained"
            endIcon={<SendIcon />}
            type="submit"
            sx={{ alignSelf: 'flex-end', mt: 2 }}
          >
            Send
          </Button>
        </Box>
      </div>
    </div>
  );
}

export default Contact;
