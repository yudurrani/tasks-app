const express = require('express')
const SurveyMetadata = require('../models/survey')
const router = new express.Router()


router.post('/surveys', async(req, res) => {
    const surveyMetadata = new SurveyMetadata(req.body)

    try{
        await surveyMetadata.save()
        
        res.status(201).send({surveyMetadata})
    
    } catch(e){
        res.status(400).send(e)
    }
})

router.get('/surveys', async(req, res) => {
    
    try{
        const surveys = await SurveyMetadata.find({})
        res.status(200).send(surveys)
    } catch(e){
        res.status(500).send()
    }
    
})

router.get('/surveys/:id', async(req, res) => {

    try{
        const survey = await SurveyMetadata.findById(req.params.id)
    
        if(!survey){
            return res.status(404).send()
        }

        res.send(survey)

    }catch(e){
        res.status(500).send(e)
    }

})

router.patch('/surveys/:id', async(req, res) => {

    try{
        const survey = await SurveyMetadata.findByIdAndUpdate(req.params.id, req.body, {new:true, runValidators:true})
        
        if(!survey){
            return res.status(404).send()
        }
        res.send(survey)
    } catch(e){
        res.status(400).send(e)
    }
})

router.delete('/surveys/:id', async(req, res) => {
  
    try{
        const survey = await SurveyMetadata.findByIdAndDelete(req.params.id)
    
       

        if(!survey){
            return res.status(404).send()
        }

        res.send(survey)
    }
     catch(e){
        res.status(500).send()
    }
})

module.exports = router
