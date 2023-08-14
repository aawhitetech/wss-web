### **Setting up NVM and Node.js LTS**

#### **1. Introduction**

This guide walks you through the process of installing `nvm` (Node Version Manager) and using it to install the LTS (Long-Term Support) version of Node.js. This ensures that you have a stable and supported version of Node.js for your development needs.

#### **2. Pre-requisites**

- A terminal and command-line access.
- Curl or Wget for downloading the installation script (most systems come pre-installed with these).

#### **3. Installing NVM**

**Using curl**:

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.4/install.sh | bash
```

**Or using wget**:

```bash
wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.4/install.sh | bash
```

After running the above, the script will clone the `nvm` repository from GitHub to `~/.nvm`, and it will attempt to add the source lines required to `~/.bashrc`, `~/.bash_profile`, or `~/.zshrc` depending on your system.

#### **4. Verifying NVM Installation**

Close and reopen your terminal or run the following command:

```bash
export NVM_DIR="$HOME/.nvm" && [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
```

You can verify `nvm` has been installed by running:

```bash
nvm --version
```

#### **5. Installing the LTS version of Node.js**

With `nvm` installed, getting the LTS version of Node.js is straightforward:

```bash
nvm install --lts
```

To ensure the LTS version is being used:

```bash
nvm use --lts
```

#### **6. Verifying Node.js and npm Installation**

You can check the versions of Node.js and npm you have installed:

```bash
node -v
npm -v
```

#### **7. Conclusion**

You've successfully installed `nvm` and the LTS version of Node.js! You can now easily switch between different Node.js versions using `nvm` and ensure compatibility and stability in your projects.

---

**Note**: The URLs and version numbers in the above document are accurate as of time of writing. Please always refer to the [official `nvm` GitHub repository](https://github.com/nvm-sh/nvm) for the most recent installation instructions and version numbers.