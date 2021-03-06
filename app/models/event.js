import DS from 'ember-data';

export default DS.Model.extend({
    // id (int, optional): The unique ID of the event resource.,
    title: DS.attr('string'), // (string, optional): The title of the event.,
    description: DS.attr('string'), // (string, optional): A description of the event.,
    // resourceURI (string, optional): The canonical URL identifier for this resource.,
    // urls (Array[Url], optional): A set of public web site URLs for the event.,
    // modified (Date, optional): The date the resource was most recently modified.,
    start: DS.attr('date'), // (Date, optional): The date of publication of the first issue in this event.,
    end: DS.attr('date'), // (Date, optional): The date of publication of the last issue in this event.,
    thumbnail: DS.attr(), // (Image, optional): The representative image for this event.,
    // comics (ComicList, optional): A resource list containing the comics in this event.,
    // stories (StoryList, optional): A resource list containing the stories in this event.,
    // series (SeriesList, optional): A resource list containing the series in this event.,
    // characters (CharacterList, optional): A resource list containing the characters which appear in this event.,
    // creators (CreatorList, optional): A resource list containing creators whose work appears in this event.,
    // next (EventSummary, optional): A summary representation of the event which follows this event.,
    // previous (EventSummary, optional): A summary representation of the event which preceded this event.
});
