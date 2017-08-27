import DS from 'ember-data';

export default DS.Model.extend({
    // id: DS.attr('string'), //(int, optional): The unique ID of the character resource.,
    name: DS.attr('string'), // (string, optional): The name of the character.,
    description: DS.attr('string'), //(string, optional): A short bio or description of the character.,
    // modified (Date, optional): The date the resource was most recently modified.,
    // resourceURI (string, optional): The canonical URL identifier for this resource.,
    // urls (Array[Url], optional): A set of public web site URLs for the resource.,
    thumbnail: DS.attr('image'), //(Image, optional): The representative image for this character.,
    // comics (ComicList, optional): A resource list containing comics which feature this character.,
    // stories (StoryList, optional): A resource list of stories in which this character appears.,
    // events (EventList, optional): A resource list of events in which this character appears.,
});
