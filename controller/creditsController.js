const creditsModel = require('../models/credits');

class creditsController {
    
   async addCredit(req, res) {
      try {
         const creditData = req.body;
         await creditsModel.addCredit(creditData);
         res.status(201).json({ message: 'Credit added successfully' });
      } catch (error) {
         res.status(500).json({ message: 'Internal server error', error: error.message });
      }
   }

   async getAllCredits(req, res) {
      try {
         const studentId = req.params.studentId;
         const allCredits = await creditsModel.getAllCredits(studentId);
         if(!allCredits) res.status(404).json({ error: 'Student not found' });
         res.status(200).json(allCredits);
      } catch (error) {
         res.status(500).json({ message: 'Internal server error', error: error.message });
      }
   }
   
    
   async getDailyCredit(req, res) {
      try {
         const studentId = req.body.studentId;
         const creditDate = req.body.creditDate;
         const dailyCredit = await creditsModel.getDailyCredit(studentId, creditDate);
         if(!dailyCredit) res.status(404).json({ error: 'Credit not found' });
         res.status(200).json(dailyCredit);
      }
      catch (error) {
         res.status(500).json({ message: 'Internal server error', error: error.message });
      }
   }
   
   async updateDailyCredit(req, res) {
      try {
         const creditData = req.body;
         await creditsModel.updateDailyCredit(creditData);
         res.status(200).json({ message: 'Credit updated successfully' });
      } catch (error) {
         res.status(500).json({ message: 'Internal server error', error: error.message });
      }
   }

   async deleteDailyCredit(req, res) {
      try {
         const creditData = req.body;
         await creditsModel.deleteDailyCredit(creditData);
         res.status(200).json({ message: 'Credit deleted successfully' });
      } catch (error) {
         res.status(500).json({ message: 'Internal server error', error: error.message });
      }
   }

   async getTotalCredit (req, res) {
      const { studentId } = req.params;
      try {
        const totalCredit = await creditsModel.getTotalCredit(studentId);
        res.status(200).json({ totalCredit: totalCredit});
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error', error: error.message });
      }
   }

}

module.exports = new creditsController;