import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Modal from './Modal';

class Categories extends Component {
  constructor(props) {
    super(props);
    this.state = {
      route: props.route,
      modalActive: false,
      newCategoryValue: '',
    };
    this.toggleModal = this.toggleModal.bind(this);
    this.insertNewCategory = this.insertNewCategory.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.deleteCategory = this.deleteCategory.bind(this);
    this.addNewButtonModal = this.addNewButtonModal.bind(this);
    this.onEnter = this.onEnter.bind(this);
  }

  onEnter(event) {
    if (event.keyCode === 13) {
      this.insertNewCategory();
      event.preventDefault();
    }
  }

  addNewButtonModal = () => {
    return (
      <>
        <button
          type="button"
          onMouseDown={() => {
            return this.toggleModal();
          }}
          className="modal-open bg-transparent border border-gray-500 hover:border-indigo-500 text-gray-500 hover:text-indigo-500 font-bold py-2 px-4 rounded-full"
        >
          <img alt="Add" style={{ width: '1.5em' }} src="/images/add.svg" />
        </button>
        <Modal
          active={this.state.modalActive}
          toggleModal={this.toggleModal}
          handleInput={this.handleInput}
          insertNewCategory={this.insertNewCategory}
          newCategoryValue={this.state.newCategoryValue}
          onEnter={this.onEnter}
        />
      </>
    );
  };

  toggleModal() {
    this.setState((prevState) => {
      return { modalActive: !prevState.modalActive, newCategoryValue: '' };
    });
  }

  handleInput(event) {
    this.setState({
      newCategoryValue: event.target.value,
    });
    event.preventDefault();
  }

  insertNewCategory() {
    const newRoute = this.state.route;
    const data = {
      path:
        newRoute.path === '/'
          ? `/${this.state.newCategoryValue}`
          : `${newRoute.path}/${this.state.newCategoryValue}`,
      label: this.state.newCategoryValue,
      parent: newRoute,
    };
    newRoute.routes ? newRoute.routes.push(data) : (newRoute.routes = [data]);
    this.setState((prevState) => {
      return {
        newCategoryValue: '',
        route: newRoute,
        modalActive: !prevState.modalActive,
      };
    });
  }

  deleteCategory(path) {
    const newRoutes = this.state.route.routes.filter((route) => {
      return route.path !== path;
    });
    this.setState((prevstate) => {
      const newRoute = prevstate.route;
      newRoute.routes = newRoutes;
      return { route: newRoute };
    });
  }

  render() {
    if (!this.state.route.routes) {
      return (
        <>
          <section className="bg-white py-8">
            <div className="container mx-auto flex items-center flex-wrap pt-4 pb-12">
              {this.addNewButtonModal()}
            </div>
          </section>
        </>
      );
    }
    return (
      <>
        <section className="bg-white py-8">
          <div className="container mx-auto flex items-center flex-wrap pt-4 pb-12">
            {this.state.route.routes.map((childRoute) => {
              const src = `https://via.placeholder.com/240x240?text=${childRoute.label}`;
              return (
                <div
                  key={childRoute.label}
                  className="w-full md:w-1/3 xl:w-1/4 p-6 flex flex-col"
                >
                  <Link to={childRoute.path}>
                    <img
                      className="hover:grow hover:shadow-lg w-full"
                      src={src}
                      alt={childRoute.label}
                    />
                    <p className="text-center">{childRoute.label}</p>
                  </Link>
                  <button
                    type="button"
                    className="text-center"
                    onMouseDown={() => {
                      return this.deleteCategory(childRoute.path);
                    }}
                  >
                    <img
                      alt="Delete"
                      style={{ width: '1.5em' }}
                      src="/images/delete.svg"
                      className="mx-auto"
                    />
                  </button>
                </div>
              );
            })}
            {this.addNewButtonModal()}
          </div>
        </section>
      </>
    );
  }
}

export default Categories;
