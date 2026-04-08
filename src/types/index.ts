export interface MenuItem {
  categorie: string;
  nomProduit: string;
  taille: string;
  prix: string;
  bestSeller: string;
  imageUrl?: string;
}

export interface Promotion {
  titre: string;
  description: string;
  prix: string;
  urgence: string;
  dateDebut?: string;
  dateFin?: string;
}
