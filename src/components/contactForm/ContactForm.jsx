

import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [linkReady, setLinkReady] = useState(false);
  const [whatsappLink, setWhatsappLink] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const phoneNumber = '+593984773063';
    const message = `Nombre: ${formData.name}\nEmail: ${formData.email}\nTeléfono: ${formData.phone}\nMensaje: ${formData.message}`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    
    setWhatsappLink(whatsappUrl);
    setLinkReady(true);
  };

  return (
    <div className="max-w-lg mx-auto px-spacing-4 pb-spacing-2 bg-gray-100 rounded-lg shadow-lg">
      <h2 className="section-subtitle py-spacing-2 text-primary">Ingresa tu información</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Nombre" required
          className="input input-bordered w-full max-w-xs bg-light text-primary section-p"
        />
        <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Correo electrónico" required
          className="input input-bordered w-full max-w-xs bg-light text-primary section-p"
        />
        <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="Teléfono"
          className="input input-bordered w-full max-w-xs bg-light text-primary section-p"
        />
        <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Mensaje" required
          className="textarea textarea-bordered w-full max-w-xs bg-light text-dark section-p"
        ></textarea>
        
        <button type="submit" className="btn form-button">Preparar Mensaje</button>
      </form>
      {linkReady && (
        <div className="mt-4 pb-spacing-2">
          <p className='text-light'>Tu mensaje está listo para ser enviado:</p>
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="form-button">Enviar Mensaje a WhatsApp</a>
        </div>
      )}
    </div>
  );
};

export default ContactForm;
