function Footer() {
    return (
        <footer className="page-footer brown lighten-2">
          <div className="footer-copyright">
            <div className="container center">
            © {new Date().getFullYear()} Copyright Text
            </div>
          </div>
        </footer>
    )
}

export {Footer}