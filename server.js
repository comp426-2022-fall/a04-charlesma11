#!/usr/bin/env node
import { roll } from './lib/roll.js';
import express from 'express';
import minimist from 'minimist';

const app = express();
const args = minimist(process.argv.slice(2));

const port = args.port ? args.port : 5000;

const sides = 6;
const dice = 2;
const rolls = 1;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/app/', (req, res) => {
  res.type('html');
  res.status(200).send('200 OK');
  console.log(res);
});

app.get('/app/roll/', (req, res) => {
  const new_sides = req.body.sides ? req.body.sides : sides;
  const new_dice = req.body.dice ? req.body.dice : dice;
  const new_rolls = req.body.rolls ? req.body.rolls : rolls;
  res.status(200).type('json').json(roll(new_sides, new_dice, new_rolls));
});

app.get('/app/roll/:sides/', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.status(200).type('json').json(roll(req.params['sides'], dice, rolls));
});

app.get('/app/roll/:sides/:dice/', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res
    .status(200)
    .type('json')
    .json(roll(req.params['sides'], req.params['dice'], rolls));
});

app.get('/app/roll/:sides/:dice/:rolls/', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res
    .status(200)
    .type('json')
    .json(roll(req.params['sides'], req.params['dice'], req.params['rolls']));
});

app.get('*', (req, res) => {
  res.type('html');
  res.status(404).send('404 NOT FOUND');
});

app.listen(port, () => {
  console.log(port);
});
