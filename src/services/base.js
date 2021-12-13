class BaseService {
  constructor(model) {
    this.model = model
  }

  async create(data) {
    return this.model.create(data)
  }

  async findOne(findBy, fieldBy) {
    return this.model.findOne(findBy).select(fieldBy);
  }

  async find(filterBy = {}, sortBy, fieldBy, skip, limit) {
    let query = this.model.find(filterBy)

    if (sortBy) {
      query = query.sort(sortBy)
    } else {
      query = query.sort('-createdAt')
    }

    if (fieldBy) {
      query = query.select(fieldBy);
    }
    
    {
      query = query.skip(skip).limit(limit);
    }
    
    return query;
  }
  
  async findById(id) {
    return this.model.findById(id);
  }
  
  async update(id, data) {
    return this.model.findByIdAndUpdate(id, data, {new: true, runValidators: true});
  }

  async delete(id) {
    return this.model.findByIdAndDelete(id);
  }

  async countDocuments() {
    const amountOfDocs = await this.model.countDocuments();
    return amountOfDocs;
  }
}

module.exports = BaseService;