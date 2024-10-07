const authService = require('../service/auth.service');

const signup = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const token = await authService.createUser(name, email, password);
    res.json({ token });
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const token = await authService.loginUser(email, password);
    res.json({ token });
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};

const profile = async (req, res) => {
  try {
    const user = await authService.getUserProfile(req.user.id);
    res.json(user);
  } catch (error) {
    res.status(500).send('Serverda xato');
  }
};

module.exports = {
  signup,
  login,
  profile
};
