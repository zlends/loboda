import React, { useState } from 'react';
import './SubscriptionForm.css';
import LanguageSelector from './LanguageSelector';
import { useLanguage } from '../contexts/LanguageContext';

const SubscriptionForm = ({ onClose }) => {
  const { t, language } = useLanguage();
  
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    countryCode: '+972', // Default to Israel
    email: '',
    optIn: false,
  });
  
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(null);
  
  const handleChange = (e) => {
    const { name, value, checked, type } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // TODO: Replace with actual API call to your backend or email service
    try {
      console.log('Form data submitted:', formData);
      
      // Simulate API call
      setTimeout(() => {
        setSubmitted(true);
        setError(null);
      }, 1000);
      
      // In a real implementation, you would send this data to your backend:
      // await fetch('/api/subscribe', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(formData)
      // });
      
    } catch (err) {
      console.error('Subscription error:', err);
      setError(t.subscription.error);
    }
  };
  
  // Set RTL direction for Hebrew
  const isRTL = language === 'he';
  
  // Country codes from subscription-en.php
  const countryCodes = [
    { code: '+93', country: 'AF' },
    { code: '+358', country: 'AX' },
    { code: '+355', country: 'AL' },
    { code: '+213', country: 'DZ' },
    { code: '+1684', country: 'AS' },
    { code: '+376', country: 'AD' },
    { code: '+244', country: 'AO' },
    { code: '+1264', country: 'AI' },
    { code: '+672', country: 'AQ' },
    { code: '+1268', country: 'AG' },
    { code: '+54', country: 'AR' },
    { code: '+374', country: 'AM' },
    { code: '+297', country: 'AW' },
    { code: '+61', country: 'AU' },
    { code: '+43', country: 'AT' },
    { code: '+994', country: 'AZ' },
    { code: '+1242', country: 'BS' },
    { code: '+973', country: 'BH' },
    { code: '+880', country: 'BD' },
    { code: '+1246', country: 'BB' },
    { code: '+375', country: 'BY' },
    { code: '+32', country: 'BE' },
    { code: '+501', country: 'BZ' },
    { code: '+229', country: 'BJ' },
    { code: '+1441', country: 'BM' },
    { code: '+975', country: 'BT' },
    { code: '+591', country: 'BO' },
    { code: '+599', country: 'BQ' },
    { code: '+387', country: 'BA' },
    { code: '+267', country: 'BW' },
    { code: '+47', country: 'BV' },
    { code: '+55', country: 'BR' },
    { code: '+246', country: 'IO' },
    { code: '+673', country: 'BN' },
    { code: '+359', country: 'BG' },
    { code: '+226', country: 'BF' },
    { code: '+257', country: 'BI' },
    { code: '+855', country: 'KH' },
    { code: '+237', country: 'CM' },
    { code: '+1', country: 'CA' },
    { code: '+34', country: 'IC' },
    { code: '+238', country: 'CV' },
    { code: '+1345', country: 'KY' },
    { code: '+236', country: 'CF' },
    { code: '+235', country: 'TD' },
    { code: '+56', country: 'CL' },
    { code: '+86', country: 'CN' },
    { code: '+57', country: 'CO' },
    { code: '+269', country: 'KM' },
    { code: '+242', country: 'CG' },
    { code: '+243', country: 'CD' },
    { code: '+682', country: 'CK' },
    { code: '+506', country: 'CR' },
    { code: '+225', country: 'CI' },
    { code: '+385', country: 'HR' },
    { code: '+53', country: 'CU' },
    { code: '+357', country: 'CY' },
    { code: '+420', country: 'CZ' },
    { code: '+45', country: 'DK' },
    { code: '+253', country: 'DJ' },
    { code: '+1767', country: 'DM' },
    { code: '+1809', country: 'DO' },
    { code: '+593', country: 'EC' },
    { code: '+20', country: 'EG' },
    { code: '+503', country: 'SV' },
    { code: '+240', country: 'GQ' },
    { code: '+291', country: 'ER' },
    { code: '+372', country: 'EE' },
    { code: '+251', country: 'ET' },
    { code: '+500', country: 'FK' },
    { code: '+298', country: 'FO' },
    { code: '+679', country: 'FJ' },
    { code: '+358', country: 'FI' },
    { code: '+33', country: 'FR' },
    { code: '+594', country: 'GF' },
    { code: '+689', country: 'PF' },
    { code: '+241', country: 'GA' },
    { code: '+220', country: 'GM' },
    { code: '+995', country: 'GE' },
    { code: '+49', country: 'DE' },
    { code: '+233', country: 'GH' },
    { code: '+350', country: 'GI' },
    { code: '+30', country: 'GR' },
    { code: '+299', country: 'GL' },
    { code: '+1473', country: 'GD' },
    { code: '+590', country: 'GP' },
    { code: '+1671', country: 'GU' },
    { code: '+502', country: 'GT' },
    { code: '+44', country: 'GG' },
    { code: '+224', country: 'GN' },
    { code: '+245', country: 'GW' },
    { code: '+592', country: 'GY' },
    { code: '+509', country: 'HT' },
    { code: '+672', country: 'HM' },
    { code: '+379', country: 'VA' },
    { code: '+504', country: 'HN' },
    { code: '+852', country: 'HK' },
    { code: '+36', country: 'HU' },
    { code: '+354', country: 'IS' },
    { code: '+91', country: 'IN' },
    { code: '+62', country: 'ID' },
    { code: '+98', country: 'IR' },
    { code: '+964', country: 'IQ' },
    { code: '+353', country: 'IE' },
    { code: '+44', country: 'IM' },
    { code: '+972', country: 'IL' },
    { code: '+39', country: 'IT' },
    { code: '+1876', country: 'JM' },
    { code: '+81', country: 'JP' },
    { code: '+44', country: 'JE' },
    { code: '+962', country: 'JO' },
    { code: '+7', country: 'KZ' },
    { code: '+254', country: 'KE' },
    { code: '+686', country: 'KI' },
    { code: '+850', country: 'KP' },
    { code: '+82', country: 'KR' },
    { code: '+965', country: 'KW' },
    { code: '+996', country: 'KG' },
    { code: '+856', country: 'LA' },
    { code: '+371', country: 'LV' },
    { code: '+961', country: 'LB' },
    { code: '+266', country: 'LS' },
    { code: '+231', country: 'LR' },
    { code: '+218', country: 'LY' },
    { code: '+423', country: 'LI' },
    { code: '+370', country: 'LT' },
    { code: '+352', country: 'LU' },
    { code: '+853', country: 'MO' },
    { code: '+389', country: 'MK' },
    { code: '+261', country: 'MG' },
    { code: '+265', country: 'MW' },
    { code: '+60', country: 'MY' },
    { code: '+960', country: 'MV' },
    { code: '+223', country: 'ML' },
    { code: '+356', country: 'MT' },
    { code: '+692', country: 'MH' },
    { code: '+596', country: 'MQ' },
    { code: '+222', country: 'MR' },
    { code: '+230', country: 'MU' },
    { code: '+262', country: 'YT' },
    { code: '+52', country: 'MX' },
    { code: '+691', country: 'FM' },
    { code: '+373', country: 'MD' },
    { code: '+377', country: 'MC' },
    { code: '+976', country: 'MN' },
    { code: '+382', country: 'ME' },
    { code: '+1664', country: 'MS' },
    { code: '+212', country: 'MA' },
    { code: '+258', country: 'MZ' },
    { code: '+95', country: 'MM' },
    { code: '+264', country: 'NA' },
    { code: '+674', country: 'NR' },
    { code: '+977', country: 'NP' },
    { code: '+31', country: 'NL' },
    { code: '+687', country: 'NC' },
    { code: '+64', country: 'NZ' },
    { code: '+505', country: 'NI' },
    { code: '+227', country: 'NE' },
    { code: '+234', country: 'NG' },
    { code: '+683', country: 'NU' },
    { code: '+672', country: 'NF' },
    { code: '+1670', country: 'MP' },
    { code: '+47', country: 'NO' },
    { code: '+968', country: 'OM' },
    { code: '+92', country: 'PK' },
    { code: '+680', country: 'PW' },
    { code: '+970', country: 'PS' },
    { code: '+507', country: 'PA' },
    { code: '+675', country: 'PG' },
    { code: '+595', country: 'PY' },
    { code: '+51', country: 'PE' },
    { code: '+63', country: 'PH' },
    { code: '+64', country: 'PN' },
    { code: '+48', country: 'PL' },
    { code: '+351', country: 'PT' },
    { code: '+1787', country: 'PR' },
    { code: '+974', country: 'QA' },
    { code: '+383', country: 'XK' },
    { code: '+262', country: 'RE' },
    { code: '+40', country: 'RO' },
    { code: '+7', country: 'RU' },
    { code: '+250', country: 'RW' },
    { code: '+590', country: 'BL' },
    { code: '+290', country: 'SH' },
    { code: '+1869', country: 'KN' },
    { code: '+1758', country: 'LC' },
    { code: '+590', country: 'MF' },
    { code: '+508', country: 'PM' },
    { code: '+1784', country: 'VC' },
    { code: '+685', country: 'WS' },
    { code: '+378', country: 'SM' },
    { code: '+239', country: 'ST' },
    { code: '+966', country: 'SA' },
    { code: '+221', country: 'SN' },
    { code: '+381', country: 'RS' },
    { code: '+248', country: 'SC' },
    { code: '+232', country: 'SL' },
    { code: '+65', country: 'SG' },
    { code: '+1721', country: 'SX' },
    { code: '+421', country: 'SK' },
    { code: '+386', country: 'SI' },
    { code: '+677', country: 'SB' },
    { code: '+252', country: 'SO' },
    { code: '+27', country: 'ZA' },
    { code: '+211', country: 'SS' },
    { code: '+34', country: 'ES' },
    { code: '+94', country: 'LK' },
    { code: '+249', country: 'SD' },
    { code: '+597', country: 'SR' },
    { code: '+47', country: 'SJ' },
    { code: '+268', country: 'SZ' },
    { code: '+46', country: 'SE' },
    { code: '+41', country: 'CH' },
    { code: '+963', country: 'SY' },
    { code: '+886', country: 'TW' },
    { code: '+992', country: 'TJ' },
    { code: '+255', country: 'TZ' },
    { code: '+66', country: 'TH' },
    { code: '+670', country: 'TL' },
    { code: '+228', country: 'TG' },
    { code: '+690', country: 'TK' },
    { code: '+676', country: 'TO' },
    { code: '+1868', country: 'TT' },
    { code: '+216', country: 'TN' },
    { code: '+90', country: 'TR' },
    { code: '+993', country: 'TM' },
    { code: '+1649', country: 'TC' },
    { code: '+688', country: 'TV' },
    { code: '+256', country: 'UG' },
    { code: '+380', country: 'UA' },
    { code: '+971', country: 'AE' },
    { code: '+44', country: 'GB' },
    { code: '+1', country: 'US' },
    { code: '+598', country: 'UY' },
    { code: '+998', country: 'UZ' },
    { code: '+678', country: 'VU' },
    { code: '+58', country: 'VE' },
    { code: '+84', country: 'VN' },
    { code: '+1284', country: 'VG' },
    { code: '+1340', country: 'VI' },
    { code: '+681', country: 'WF' },
    { code: '+212', country: 'EH' },
    { code: '+967', country: 'YE' },
    { code: '+260', country: 'ZM' },
    { code: '+263', country: 'ZW' }
  ];
  
  // Prioritize popular countries and put them at the top
  const priorityCountries = ['+972', '+380', '+7', '+49', '+31', '+1', '+44'];
  
  // Sort country codes by priority first, then alphabetically
  const sortedCountryCodes = [...countryCodes].sort((a, b) => {
    const aPriority = priorityCountries.indexOf(a.code);
    const bPriority = priorityCountries.indexOf(b.code);
    
    if (aPriority !== -1 && bPriority !== -1) {
      return aPriority - bPriority;
    } else if (aPriority !== -1) {
      return -1;
    } else if (bPriority !== -1) {
      return 1;
    }
    
    return a.country.localeCompare(b.country);
  });
  
  return (
    <div className="subscription-form-overlay">
      <div 
        className="subscription-form-container"
        dir={isRTL ? 'rtl' : 'ltr'}
      >
        <button className="close-form-btn" onClick={onClose}>×</button>
        
        {submitted ? (
          <div className="success-message">
            <div className="success-icon">✓</div>
            <p>{t.subscription.success}</p>
            <button onClick={onClose} className="form-button">OK</button>
          </div>
        ) : (
          <>
            {error && (
              <div className="error-message">
                <p>{error}</p>
              </div>
            )}
            
            <div className="form-header">
              <h2>{t.subscription.title}</h2>
              <p>{t.subscription.subtitle}</p>
            </div>
            
            <div className="form-benefits">
              {t.subscription.benefits.map((benefit, index) => (
                <p key={index}><strong>✔</strong> {benefit}</p>
              ))}
            </div>
            
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="fullName">{t.subscription.fullName}</label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  placeholder={t.subscription.placeholder.name}
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="phone">{t.subscription.phone}</label>
                <div className="phone-input-group">
                  <select 
                    name="countryCode"
                    value={formData.countryCode}
                    onChange={handleChange}
                    required
                  >
                    {sortedCountryCodes.map((country) => (
                      <option key={`${country.code}-${country.country}`} value={country.code}>
                        {country.code} {country.country}
                      </option>
                    ))}
                  </select>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder={t.subscription.placeholder.phone}
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              
              <div className="form-group">
                <label htmlFor="email">{t.subscription.email}</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder={t.subscription.placeholder.email}
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                <small className="form-hint">{t.subscription.example}</small>
              </div>
              
              <div className="form-group checkbox-group">
                <label className="checkbox-container">
                  <input
                    type="checkbox"
                    name="optIn"
                    checked={formData.optIn}
                    onChange={handleChange}
                    required
                  />
                  <span className="checkbox-text">{t.subscription.consent}</span>
                </label>
                <small className="form-hint">{t.subscription.unsubscribe}</small>
              </div>
              
              <button type="submit" className="form-button">{t.subscription.submit}</button>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default SubscriptionForm; 