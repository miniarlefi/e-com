const express = require('express');
const mongoose = require('mongoose');
const Commande = require('./models/commande');

const app = express();
app.use(express.json());
mongoose.connect("mongodb+srv://useContact:test1@cluster2.ogcau.mongodb.net/?retryWrites=true&w=majority&appName=Cluster2",) 
 


  .then(() => console.log('Connecté à MongoDB'))
  .catch(err => console.error('Erreur de connexion à MongoDB', err));

// Création de la commande
app.post('/commandes', async (req, res) => {
  try {
    const commande = new Commande(req.body);
    await commande.save();
    res.status(201).send(commande);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Récupération de toutes les commandes
app.get('/commandes', async (req, res) => {
  try {
    const commandes = await Commande.find();
    res.send(commandes);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Mise à jour d'une commande
app.put('/commandes/:id', async (req, res) => {
  try {
    const commande = await Commande.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!commande) {
      return res.status(404).send();
    }
    res.send(commande);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Suppression d'une commande
app.delete('/commandes/:id', async (req, res) => {
  try {
    const commande = await Commande.findByIdAndDelete(req.params.id);
    if (!commande) {
      return res.status(404).send();
    }
    res.status(204).send();
  } catch (error) {
    res.status(500).send(error);
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Serveur en cours d'exécution sur le port ${PORT}`);
});
