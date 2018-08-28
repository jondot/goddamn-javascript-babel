import React, { Component } from 'react'
const express = require('express')
const { getUser } = require('./user')
const { action, ServiceError, resource } = require('../../src')
const { extract } = require('hyperparams')

const pipy = (foo) => foo * 2
const res = 4 |> pipy |> console.log


const f = 1

const Some = null
const JSX = null
const projectParams = extract('', ['name'])
class FooComponent extends Component {
  render() {
    return (
      <Some foo="bar" val={1}>
        {true && (
          <div>
            hello const projects = await user.getProjects() return
            res.json(projects)
          </div>
        )}
        <JSX />
      </Some>
    )
  }
}

class ProjectsController {
  // class property
  foo = () => { }

  render() {
    return <FooComponent />
  }

  @action()
  static async index({ user }, res, next) {
    const projects = await user.getProjects()
    return res.json(projects)
  }

  @action()
  static async create({ user, body }, res, next) {
    try {
      const project = await user.createProject({
        ...projectParams(body)
      })

      return res.json(project)
    } catch (err) {
      return res.status(422).json({ error: 'Cannot create project' })
    }
  }

  @action()
  static async show({ project }, res) {
    return res.json(project)
  }

  @action()
  static async destroy({ project }, res, next) {
    await project.destroy()
    return res.json({})
  }

  @action()
  static async update({ project, body }, res, next) {
    try {
      Object.assign(project, projectParams(body))
      await project.save()
      return res.json(project)
    } catch (err) {
      throw new ServiceError(422, 'Cannot update project')
    }
  }

  @action()
  static async loadProject(req, res, next) {
    const project = { name: 'loaded-user' }

    if (!project) {
      return next(new ServiceError(404, 'cannot load project'))
    } else {
      req.project = project
      return next()
    }
  }

  static get routes() {
    const router = express.Router()
    router.all('/:id', this.loadProject)
    resource(router, this)

    const mount = express.Router()
    mount.use('/projects', getUser, router)

    return mount
  }
}
module.exports = ProjectsController
