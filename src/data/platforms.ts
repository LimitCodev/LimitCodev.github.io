import { Language } from '../utils/translations';
import mimoLogo from 'figma:asset/6a85f52cf81aa07feeb1f6276a6b964fb4f16a98.png';
import codeforcesLogo from 'figma:asset/c81a8ca19d19387010ddd279b3b18b7203ad207f.png';
import hackerrankLogo from 'figma:asset/d77a430d1edd83370bc8a4b66138f531e45a64bc.png';

export interface Platform {
  id: string;
  name: string;
  logo: string;
  url: string;
  stats: {
    [key in Language]: string[];
  };
  color: string;
}

export const platforms: Platform[] = [
  {
    id: 'hackerrank',
    name: 'HackerRank',
    logo: hackerrankLogo,
    url: 'https://www.hackerrank.com/profile/LimitCodev',
    stats: {
      es: ['⭐ 5 Estrellas en Python', '⭐ 5 Estrellas en SQL', '🏆 100+ Problemas Resueltos'],
      en: ['⭐ 5 Stars in Python', '⭐ 5 Stars in SQL', '🏆 100+ Problems Solved'],
      pt: ['⭐ 5 Estrelas em Python', '⭐ 5 Estrelas em SQL', '🏆 100+ Problemas Resolvidos'],
      de: ['⭐ 5 Sterne in Python', '⭐ 5 Sterne in SQL', '🏆 100+ Probleme Gelöst'],
      fr: ['⭐ 5 Étoiles en Python', '⭐ 5 Étoiles en SQL', '🏆 100+ Problèmes Résolus'],
      it: ['⭐ 5 Stelle in Python', '⭐ 5 Stelle in SQL', '🏆 100+ Problemi Risolti'],
      hi: ['⭐ Python में 5 तारे', '⭐ SQL में 5 तारे', '🏆 100+ समस्याएं हल'],
    },
    color: '#00EA64',
  },
  {
    id: 'codeforces',
    name: 'CodeForces',
    logo: codeforcesLogo,
    url: 'https://codeforces.com/profile/LimitCodev',
    stats: {
      es: ['📊 Rating: 1200+', '🎯 Pupil', '💻 50+ Problemas Resueltos'],
      en: ['📊 Rating: 1200+', '🎯 Pupil', '💻 50+ Problems Solved'],
      pt: ['📊 Rating: 1200+', '🎯 Pupil', '💻 50+ Problemas Resolvidos'],
      de: ['📊 Rating: 1200+', '🎯 Pupil', '💻 50+ Probleme Gelöst'],
      fr: ['📊 Rating: 1200+', '🎯 Pupil', '💻 50+ Problèmes Résolus'],
      it: ['📊 Rating: 1200+', '🎯 Pupil', '💻 50+ Problemi Risolti'],
      hi: ['📊 रेटिंग: 1200+', '🎯 Pupil', '💻 50+ समस्याएं हल'],
    },
    color: '#1F8ACB',
  },
  {
    id: 'leetcode',
    name: 'LeetCode',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png',
    url: 'https://leetcode.com/LimitCodev/',
    stats: {
      es: ['🔥 150+ Problemas Resueltos', '🎯 Top 30% Global', '⚡ Racha de 30 días'],
      en: ['🔥 150+ Problems Solved', '🎯 Top 30% Global', '⚡ 30 Day Streak'],
      pt: ['🔥 150+ Problemas Resolvidos', '🎯 Top 30% Global', '⚡ Sequência de 30 dias'],
      de: ['🔥 150+ Probleme Gelöst', '🎯 Top 30% Global', '⚡ 30 Tage Streak'],
      fr: ['🔥 150+ Problèmes Résolus', '🎯 Top 30% Global', '⚡ Série de 30 jours'],
      it: ['🔥 150+ Problemi Risolti', '🎯 Top 30% Globale', '⚡ Streak di 30 giorni'],
      hi: ['🔥 150+ समस्याएं हल', '🎯 शीर्ष 30% वैश्विक', '⚡ 30 दिन की लकीर'],
    },
    color: '#FFA116',
  },
  {
    id: 'mimo',
    name: 'Mimo',
    logo: mimoLogo,
    url: 'https://mimo.com/profile/LimitCodev',
    stats: {
      es: ['📚 10+ Cursos Completados', '🏅 50+ Certificados', '💡 Python, JavaScript, SQL'],
      en: ['📚 10+ Courses Completed', '🏅 50+ Certificates', '💡 Python, JavaScript, SQL'],
      pt: ['📚 10+ Cursos Concluídos', '🏅 50+ Certificados', '💡 Python, JavaScript, SQL'],
      de: ['📚 10+ Kurse Abgeschlossen', '🏅 50+ Zertifikate', '💡 Python, JavaScript, SQL'],
      fr: ['📚 10+ Cours Complétés', '🏅 50+ Certificats', '💡 Python, JavaScript, SQL'],
      it: ['📚 10+ Corsi Completati', '🏅 50+ Certificati', '💡 Python, JavaScript, SQL'],
      hi: ['📚 10+ पाठ्यक्रम पूरे', '🏅 50+ प्रमाणपत्र', '💡 Python, JavaScript, SQL'],
    },
    color: '#6C63FF',
  },
  {
    id: 'stackoverflow',
    name: 'Stack Overflow',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/e/ef/Stack_Overflow_icon.svg',
    url: 'https://stackoverflow.com/users/LimitCodev',
    stats: {
      es: ['⭐ 500+ Reputación', '💬 30+ Respuestas', '🏆 5+ Insignias'],
      en: ['⭐ 500+ Reputation', '💬 30+ Answers', '🏆 5+ Badges'],
      pt: ['⭐ 500+ Reputación', '💬 30+ Respostas', '🏆 5+ Emblemas'],
      de: ['⭐ 500+ Reputation', '💬 30+ Antworten', '🏆 5+ Abzeichen'],
      fr: ['⭐ 500+ Réputation', '💬 30+ Réponses', '🏆 5+ Badges'],
      it: ['⭐ 500+ Reputazione', '💬 30+ Risposte', '🏆 5+ Medaglie'],
      hi: ['⭐ 500+ प्रतिष्ठा', '💬 30+ उत्तर', '🏆 5+ बैज'],
    },
    color: '#F48024',
  },
  {
    id: 'codechef',
    name: 'CodeChef',
    logo: 'https://cdn.codechef.com/images/cc-logo.svg',
    url: 'https://www.codechef.com/users/LimitCodev',
    stats: {
      es: ['⭐ Rating: 1400+', '🎯 3 Estrellas', '🏅 40+ Problemas Resueltos'],
      en: ['⭐ Rating: 1400+', '🎯 3 Stars', '🏅 40+ Problems Solved'],
      pt: ['⭐ Rating: 1400+', '🎯 3 Estrelas', '🏅 40+ Problemas Resolvidos'],
      de: ['⭐ Rating: 1400+', '🎯 3 Sterne', '🏅 40+ Probleme Gelöst'],
      fr: ['⭐ Rating: 1400+', '🎯 3 Étoiles', '🏅 40+ Problèmes Résolus'],
      it: ['⭐ Rating: 1400+', '🎯 3 Stelle', '🏅 40+ Problemi Risolti'],
      hi: ['⭐ रेटिंग: 1400+', '🎯 3 तारे', '🏅 40+ समस्याएं हल'],
    },
    color: '#5B4638',
  },
];