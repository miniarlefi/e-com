const express = require('express');
const Commande = require('../models/commande');

const router = express.Router();

// Créer une nouvelle commande
router.post('/commandes', async (req, res) => {
  try {
    const commande = new Commande(req.body);
    await commande.save();
    res.status(201).send(commande);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Récupérer toutes les commandes
router.get('/commandes', async (req, res) => {
  try {
    const commandes = await Commande.find();
    res.send(commandes);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Mettre à jour une commande
router.put('/commandes/:id', async (req, res) => {
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

// Supprimer une commande
router.delete('/commandes/:id', async (req, res) => {
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

module.exports = router;
