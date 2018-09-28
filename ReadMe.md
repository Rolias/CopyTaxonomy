# Taxonomy Helper
Author: Tod Gentille

Two, two, two tools in one! The Taxonomy Helper was pulling an all-nighter and while on a coffee break ran into the Augmented Nightly Snapshot, and wouldn’t you know it, the two got together. 

You can navigate the taxonomy with a series of three drop-downs (super domain, primary domain, subdomain) and that sheet will show you all the atomic tags under that hierarchy. A separate sheet will be busily calculating in the background as you do each step and showing you the courses that match whatever portion of the taxonomy you have specified.  It has a few other tricks too so those and more details are below.
[Taxonomy Helper Google Sheet](bit.ly/tax-helper)

## Drop-down Tagging Tool
 If you need to tag a course and you have a good idea of the Super-domain you can drill down by using context-dependent dropdown lists moving from left to right.  As you select (or type) a value in the left dropdown, the next dropdown to the right will populate with valid values.  When you select a new Super-domain, the sheet  **will** clear the invalid settings in the drop-downs to the right. You need to set all the drop-downs moving from left to right to see the list of valid atomic tags for a selection. This was designed as a way to allow you to browse from the top down to find tags.  As a bonus, as you select each dropdown the `Courses Per Tagging`  sheet will update in close to real time (see Warnings section below) showing you all the courses that match your selection. 

## Courses Per Tagging
Used to display courses that match the values specified in the `Drop-down Tagging Tool` sheet. 

## Select Columns
Allows you to specify what columns of data get displayed from the augmented nightly snapshot. The snapshot has a **LOT** of columns. I picked 33 of the ones I thought were most likely of interest. Click in the box to right of any column that you would like to have displayed on both the `Courses Per Tagging` and `Find Courses By Atomic Tag` sheets. Clicking the big blue RESET button will clear the checkboxes, except for the URL, title, and author(s) columns.

## Find Courses by Atomic Tag
The Drop-down Tagging Tool doesn’t limit down to the Atomic Tag level, but this sheet does. You can type a full tag, or a part of a tag here and all courses that match will be found. This is a good way to find out how many hours of content we have in a specific area. The search is always case-insensitive, and it looks for the entered value anywhere inside the `atomicTags.` Note, this is **not** the primary atomic tag column but the column that can hold multiple atomic tags for a course. 
As an example,  ‘javas’ finds:
`JavaServer Faces (JSF)`
`JavaServer Pages (JSP)`
`JavaScript API for Office`
`JavaScript`
If you want to know exactly what tags will match, see the entry below on the  `Taxonomy for Atomic Tag` .

## Taxonomy for Atomic Tag
This sheet is designed for anyone looking at an idea or proposal and wondering where it fits in the taxonomy. You can look up any of the critical technology terms by selecting a value from the (really long) popup.  However, it’s easier to type a value. You’ll get type-ahead lists, but you can hit return without selecting an item. Two additional checkboxes let you customize the search. If you leave them both unchecked, you get the maximum number of results.

### Case Sensitivity ✅

 If you check the `Case Sensitive`  checkbox, then the case must exactly match what you typed for the tag. (Try setting it and typing `.net`, and then clearing it and try  `.NET`)

### Exact Match ✅

When the  `Exact Match`  checkbox is clear you can match on a partial value in the atomic tag area. For example, if you want to find every technology that uses the `.` in its name just type a period in the Atomic tag search field and you’ll get a surprisingly long list.  If you enable  `Exact Match`  checkbox  `#N/A` will show up since no atomic tag is just the period symbol.


## Hidden Sheets
There are several hidden (and protected) sheets. These contain the raw taxonomy data and various formulas and references the drive the sheets you interact with. They aren’t hidden because you shouldn’t look at them, they are just hidden so that the sheets you’re expected to interact with are the ones that are shown. 

## Protected Ranges
I tried to protect all the areas on the sheets where you shouldn’t enter data or make changes. I haven’t tested it that thoroughly. If you find a problem just let me know.

## WARNING
1. A lot is going on behind the scenes so certain actions might not be as quick as you would expect. For instance, as you select each dropdown, it might take a second or two for the next list to populate. If you’re fast at switching sheets, you might need to wait another second or so for the most recent course data to be populated on the `Courses Per Tagging` sheet. You get a visual indicator when the sheet is busy, a progress bar in the upper right-hand corner of the spreadsheet (in the toolbar area) is shown. 
2. While searching courses, if you ONLY specify the superdomain, the search is limited to returning just the first 100 courses. This was done to make the sheet a bit more responsive.
3. Since this is a google spreadsheet it is shared with multiple people. This could be a problem if two (or more) people are trying to use this spreadsheet at the same time. My advice: play nice. Once all the kinks are ironed out it may work to allow everyone to have their own copy.


If you have suggestions for improvements feel free to reach out.

## GLOSSARY
**Spreadsheet** - A collection of sheets.
**Sheet** - A single sheet inside a spreadsheet.