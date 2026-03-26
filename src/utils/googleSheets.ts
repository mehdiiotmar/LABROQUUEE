import { MenuItem, Promotion } from '../types';

const SHEET_ID = '13hcXCtLpEvbcrZNNk_r44RR7HU7wMySosYfuvSlTQvQ';

function parseCSV(text: string): string[][] {
  const lines = text.split('\n');
  return lines.map(line => {
    const values: string[] = [];
    let current = '';
    let inQuotes = false;

    for (let i = 0; i < line.length; i++) {
      const char = line[i];

      if (char === '"') {
        inQuotes = !inQuotes;
      } else if (char === ',' && !inQuotes) {
        values.push(current.trim());
        current = '';
      } else {
        current += char;
      }
    }

    values.push(current.trim());
    return values;
  }).filter(row => row.some(cell => cell));
}

export async function fetchMenuItems(): Promise<MenuItem[]> {
  try {
    const response = await fetch(
      `https://docs.google.com/spreadsheets/d/${SHEET_ID}/export?format=csv&gid=0`
    );
    const text = await response.text();
    const rows = parseCSV(text);

    return rows.slice(1).map(row => ({
      categorie: row[0] || '',
      nomProduit: row[1] || '',
      taille: row[2] || '',
      prix: row[3] || '',
      bestSeller: row[4] || '',
      imageUrl: row[5] || '',
    })).filter(item => item.nomProduit);
  } catch (error) {
    console.error('Error fetching menu items:', error);
    return [];
  }
}


export async function fetchPromotions(): Promise<Promotion[]> {
  try {
    const response = await fetch(
      `https://docs.google.com/spreadsheets/d/${SHEET_ID}/export?format=csv&gid=242827208`
    );
    const text = await response.text();
    const rows = parseCSV(text);

    return rows.slice(1).map(row => ({
      titre: row[0] || '',
      description: row[1] || '',
      prix: row[2] || '',
      urgence: row[3] || '',
      dateDebut: row[4] || '',
      dateFin: row[5] || '',
    })).filter(promo => promo.titre);
  } catch (error) {
    console.error('Error fetching promotions:', error);
    return [];
  }
}

export function generateWhatsAppLink(message: string): string {
  const phoneNumber = '212688468409';
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
}
