
    class Autor {
      constructor(nombre, nacionalidad) {
        this.nombre = nombre;
        this.nacionalidad = nacionalidad;
      }
    }

    class Libro {
      constructor(titulo, autor, anioPublicacion) {
        this.titulo = titulo;
        this.autor = autor;
        this.anioPublicacion = anioPublicacion;
      }

      obtenerInfo() {
        return `${this.titulo} escrito por ${this.autor.nombre}, publicado en ${this.anioPublicacion}`;
      }
    }

    class Biblioteca {
      constructor() {
        this.libros = [];
      }

      agregarLibro(libro) {
        this.libros.push(libro);
      }

      mostrarCatalogo() {
        const catalogoBody = document.getElementById('catalogo-body');

        this.libros.forEach(libro => {
          const row = document.createElement('tr');
          const titleCell = document.createElement('td');
          const authorCell = document.createElement('td');
          const yearCell = document.createElement('td');

          titleCell.textContent = libro.titulo;
          authorCell.textContent = libro.autor.nombre;
          yearCell.textContent = libro.anioPublicacion;

          row.appendChild(titleCell);
          row.appendChild(authorCell);
          row.appendChild(yearCell);

          catalogoBody.appendChild(row);
        });
      }
    }

    let autor1 = new Autor('J.K. Rowling', 'Británica');
    let autor2 = new Autor('Gabriel García Márquez', 'Colombiano');

    let libro1 = new Libro('Harry Potter y la Piedra Filosofal', autor1, 1997);
    let libro2 = new Libro('Cien años de soledad', autor2, 1967);

    let biblioteca = new Biblioteca();

    biblioteca.agregarLibro(libro1);
    biblioteca.agregarLibro(libro2);

    biblioteca.mostrarCatalogo();
