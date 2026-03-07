import kImage1 from "@/public/img/k-image-1.png";
import kImage2 from "@/public/img/k-image-2.png";
import kImage3 from "@/public/img/k-image-3.png";
import kImage4 from "@/public/img/k-image-4.png";
import problemCard1 from "@/public/img/problem-card-1.png";
import problemCard2 from "@/public/img/problem-card-2.png";

export const categories = [
  "Tous",
  "Recrutement",
  "Conseils",
  "Actualités",
  "Métiers",
];

export const blogs = [
  {
    id: "1",
    slug: "comment-optimiser-sa-recherche-d-emploi",
    title: "Comment optimiser sa recherche d'emploi en 2024",
    excerpt:
      "Découvrez nos meilleures astuces pour vous démarquer auprès des recruteurs et trouver le poste qui vous correspond vraiment.",
    content:
      "La recherche d'emploi a beaucoup évolué. Avec l'avènement des plateformes spécialisées et du télétravail, les opportunités n'ont jamais été aussi nombreuses, mais la concurrence est rude. Voici nos conseils pour optimiser votre profil, soigner votre candidature et utiliser efficacement votre réseau. Ciblez vos entreprises, personnalisez vos lettres de motivation et surtout, tenez compte des nouvelles tendances du recrutement.",
    category: "Conseils",
    author: "Daniel Abutumange",
    date: "12 Mars 2024",
    readTime: "4 min",
    views: 1240,
    image: kImage1,
  },
  {
    id: "2",
    slug: "l-importance-des-soft-skills",
    title: "Pourquoi les Soft Skills font la différence en entretien",
    excerpt:
      "Les compétences techniques ne suffisent plus. Les recruteurs accordent une importance croissante au savoir-être.",
    content:
      "Aujourd'hui, un CV parfait ne garantit plus une embauche. Les recruteurs recherchent des profils capables de s'adapter, de communiquer efficacement et de travailler en équipe. L'intelligence émotionnelle, la flexibilité et la résolution de problèmes sont devenues cruciaux pour l'évolution au sein des entreprises modernes. Dans cet article, découvrez comment mettre en valeur vos soft skills dès le premier contact.",
    category: "Recrutement",
    author: "Carmel Siki",
    date: "05 Mars 2024",
    readTime: "5 min",
    views: 890,
    image: problemCard1,
  },
  {
    id: "3",
    slug: "les-metiers-du-numerique-en-pleine-croissance",
    title: "Les métiers du numérique en pleine croissance",
    excerpt:
      "Zoom sur les professions de la Tech qui recrutent massivement cette année et les compétences nécessaires.",
    content:
      "Le secteur du numérique continue sa croissance ininterrompue. De nouveaux besoins émergent autour de l'intelligence artificielle, de la cybersécurité et du cloud computing. Comment se former à ces métiers ? Faut-il forcément un diplôme d'ingénieur ? Nous vous détaillons les parcours possibles et les attentes des entreprises de la French Tech pour ces postes hautement stratégiques.",
    category: "Métiers",
    author: "Marcel Senga",
    date: "28 Février 2024",
    readTime: "6 min",
    views: 2150,
    image: kImage2,
  },
  {
    id: "4",
    slug: "kailloux-lance-sa-nouvelle-version",
    title: "Kailloux lance sa nouvelle version",
    excerpt:
      "Découvrez les nouvelles fonctionnalités de notre plateforme pour une mise en relation toujours plus fluide.",
    content:
      "Nous sommes fiers de vous présenter la nouvelle itération de Kailloux. Après des mois de développement et de retours utilisateurs, nous avons repensé notre interface pour qu'elle soit plus rapide, plus intuitive et plus inclusive. Nouvelle barre de recherche, algorithme de matching optimisé, design épuré... Plongez dans les détails de notre mise à jour majeure.",
    category: "Actualités",
    author: "L'équipe Kailloux",
    date: "15 Février 2024",
    readTime: "3 min",
    views: 3420,
    image: kImage4,
  },
  {
    id: "5",
    slug: "reussir-son-integration-en-entreprise",
    title: "Réussir son intégration : les 30 premiers jours",
    excerpt:
      "Vous avez décroché le poste ? Bravo ! Voici la feuille de route pour faire bonne impression durant votre premier mois.",
    content:
      "L'intégration (ou onboarding) est une étape déterminante de votre parcours en entreprise. Il ne s'agit pas seulement de comprendre vos tâches, mais aussi d'assimiler la culture de l'entreprise et de tisser des liens avec vos collaborateurs. Quels gestes adopter, quelles questions poser, comment solliciter du feedback : adoptez la bonne posture avec notre guide complet.",
    category: "Conseils",
    author: "Carmel Siki",
    date: "10 Février 2024",
    readTime: "5 min",
    views: 650,
    image: problemCard2,
  },
  {
    id: "6",
    slug: "marche-du-travail-et-travail-hybride",
    title: "Comment le modèle hybride redéfinit le recrutement",
    excerpt:
      "Télétravail, flexibilité géographique et asynchronicité modifient la façon dont les entreprises sourcent les talents.",
    content:
      "Le modèle hybride s'ancre durablement dans nos habitudes. Il ne s'agit plus d'un simple 'avantage', mais d'une attente fondamentale des candidats. Dès lors, comment les entreprises adaptent-elles leur stratégie de recrutement ? Les frontières géographiques s'effacent progressivement, ce qui permet de cibler des bassins d'emploi inexploités.",
    category: "Recrutement",
    author: "Daniel Abutumange",
    date: "02 Février 2024",
    readTime: "7 min",
    views: 1100,
    image: kImage3,
  },
];
